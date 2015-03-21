<?php

namespace CoursUniv\DAO;

use Doctrine\DBAL\Connection;
use CoursUniv\Entity\Course;
<<<<<<< HEAD

=======
use CoursUniv\Entity\Version;
>>>>>>> f412a9bd9edc16add37bc1cc53f5b1f59aaef15f

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
<<<<<<< HEAD
        $sql = "SELECT * FROM course ORDER BY id_course DESC";
=======
        $sql = "
          SELECT *
          FROM course
          JOIN version ON course.current_version_course = version.id_version
        ";
>>>>>>> f412a9bd9edc16add37bc1cc53f5b1f59aaef15f
        $result = $this->db->fetchAll($sql);

        // Convert query result to an array of domain objects
        $articles = array();
        foreach ($result as $row) {
<<<<<<< HEAD
            $articles[] = $this->buildCourse($row);
=======
            $articles[] = self::hydrate($row);
>>>>>>> f412a9bd9edc16add37bc1cc53f5b1f59aaef15f
        }
        return $articles;
    }

    /**
     * Builds a new instance of Course from an array
     *
     * @param array $row
     * @return Course
     */
<<<<<<< HEAD
    protected function buildCourse(array $row)
=======
    public static function hydrate(array $row)
>>>>>>> f412a9bd9edc16add37bc1cc53f5b1f59aaef15f
    {
        $course = new Course();
        $course
            ->setId($row['id_course'])
            ->setName($row['name_course'])
<<<<<<< HEAD
            ->setContent($row['content_course'])
=======
            ->setCurrent(VersionDAO::hydrate($row))
>>>>>>> f412a9bd9edc16add37bc1cc53f5b1f59aaef15f
        ;

        return $course;
    }
}