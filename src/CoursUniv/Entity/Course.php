<?php
/**
 * Created by PhpStorm.
 * User: palra
 * Date: 20/03/15
 * Time: 20:35
 */

namespace CoursUniv\Entity;

<<<<<<< HEAD
=======
use CoursUniv\Entity\Version;

>>>>>>> f412a9bd9edc16add37bc1cc53f5b1f59aaef15f

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
<<<<<<< HEAD
     * @var string
     */
    private $content;
=======
     * @var Version
     */
    private $current;
>>>>>>> f412a9bd9edc16add37bc1cc53f5b1f59aaef15f

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
<<<<<<< HEAD
     * @return string
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * @param string $content
     * @return Course
     */
    public function setContent($content)
    {
        $this->content = $content;
        return $this;
    }
=======
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


>>>>>>> f412a9bd9edc16add37bc1cc53f5b1f59aaef15f
}