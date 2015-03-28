<?php

namespace CoursUniv\DAO;

use Application\Util\Collection\PaginatedCollection;
use Doctrine\DBAL\Connection;
use CoursUniv\Entity\Course;

class CourseDAO {
    /**
     * @var Connection
     */
    private $db;

    public function __construct(Connection $db)
    {
        $this->db = $db;
    }

    public function count()
    {
        $sql = "SELECT COUNT(*) FROM course";
        return (int) $this->db->fetchColumn($sql);
    }

    /**
     * Return an array of all courses, sorted by date (most recent first).
     *
     * @return array A list of all articles.
     */
    public function findAll() {
        $sql = "
          SELECT course.*, version.*
          FROM course
          JOIN version ON course.current_version_course = version.id_version
        ";
        $result = $this->db->fetchAll($sql);

        // Convert query result to an array of domain objects
        $articles =self::hydrateArray($result);
        return $articles;
    }

    /**
     * Lists all courses with pagination.
     *
     * @param int $page
     * @param int $perPage
     */
    public function findByPage($page, $perPage = 10)
    {
        $paginatedColl = new PaginatedCollection();
        $paginatedColl->setTotalItems($this->count());
        $paginatedColl->setItemsPerPage($perPage);
        $paginatedColl->setCurrentPage($page);

        $sql = "
          SELECT course.*, version.*
          FROM course
          JOIN version ON course.current_version_course = version.id_version
          LIMIT :limit
          OFFSET :offset
        ";
        $statement = $this->db->prepare($sql);
        $statement->bindValue('limit', $paginatedColl->getLimit());
        $statement->bindValue('offset', $paginatedColl->getOffset());

        $statement->execute();
        $result = $statement->fetchAll();

        $articles = self::hydrateArray($result);

        $paginatedColl->setObjects($articles);
        return $paginatedColl;
    }

    /**
     * Builds a new instance of Course from an array
     *
     * @param array $row
     * @return Course
     */
    public static function hydrateRow(array $row)
    {
        $course = new Course();
        $course
            ->setId($row['id_course'])
            ->setName($row['name_course'])
            ->setCurrent(VersionDAO::hydrate($row))
        ;

        return $course;
    }

    public static function hydrateArray(array $result)
    {
        $articles = array();
        foreach ($result as $row) {
            $articles[] = self::hydrateRow($row);
        }

        return $articles;
    }

}