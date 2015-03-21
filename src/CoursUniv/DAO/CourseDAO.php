<?php

namespace CoursUniv\DAO;

use Doctrine\DBAL\Connection;
use CoursUniv\Entity\Course;
use CoursUniv\Entity\Version;

class CourseDAO {
    /**
     * @var Connection
     */
    private $db;

    public function __construct(Connection $db)
    {
        $this->db = $db;
    }

    /**
     * Return an array of all courses, sorted by date (most recent first).
     *
     * @return array A list of all articles.
     */
    public function findAll() {
        $sql = "
          SELECT *
          FROM course
          JOIN version ON course.current_version_course = version.id_version
        ";
        $result = $this->db->fetchAll($sql);

        // Convert query result to an array of domain objects
        $articles = array();
        foreach ($result as $row) {
            $articles[] = self::hydrate($row);
        }
        return $articles;
    }

    /**
     * Builds a new instance of Course from an array
     *
     * @param array $row
     * @return Course
     */
    public static function hydrate(array $row)
    {
        $course = new Course();
        $course
            ->setId($row['id_course'])
            ->setName($row['name_course'])
            ->setCurrent(VersionDAO::hydrate($row))
        ;

        return $course;
    }
}