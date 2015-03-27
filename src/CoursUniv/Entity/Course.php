<?php
/**
 * Created by PhpStorm.
 * User: palra
 * Date: 20/03/15
 * Time: 20:35
 */

namespace CoursUniv\Entity;
use CoursUniv\Entity\Version;


class Course {
    /**
     * @var int
     */
    private $id;

    /**
     * @var string
     */
    private $name;

    /**
     * @var Version
     */
    private $current;

    /**
     * @var string
     */
    private $description;

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     * @return Course
     */
    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $name
     * @return Course
     */
    public function setName($name)
    {
        $this->name = $name;
        return $this;
    }

    /**
     * @return Version
     */
    public function getCurrent()
    {
        return $this->current;
    }

    /**
     * @param Version $current
     * @return Course
     */
    public function setCurrent($current)
    {
        $this->current = $current;
        return $this;
    }

    /**
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param string $description
     * @return Course
     */
    public function setDescription($description)
    {
        $this->description = $description;
        return $this;
    }

}
