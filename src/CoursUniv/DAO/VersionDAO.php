<?php
/**
 * Created by PhpStorm.
 * User: palra
 * Date: 21/03/15
 * Time: 16:13
 */

namespace CoursUniv\DAO;


use CoursUniv\Entity\Version;

class VersionDAO {

    /**
     * Builds a new instance of Version from an array
     *
     * @param array $row
     * @return Course
     */
    public static function hydrate(array $row)
    {
        $version = new Version();
        $version
            ->setId($row['id_version'])
            ->setContent($row['content_version'])
            ->setDate($row['datetime_version'])
        ;

        return $version;
    }
}