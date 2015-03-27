<?php
namespace CoursUniv\Entity;

class Version
	{
    /**
     * @var int
     */
	private $id;

    /**
     * @var string
     */
	 private $content;

    /**
     * @var DateTime
     */
     private $date;

    /**
     * @var Version
     */
     private $parent;

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     * @return Version
     */
    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @return string
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * @param string $content
     * @return Version
     */
    public function setContent($content)
    {
        $this->content = $content;
        return $this;
    }

    /**
     * @return DateTime
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * @param DateTime $date
     * @return Version
     */
    public function setDate($date)
    {
        $this->date = $date;
        return $this;
    }

    /**
     * @return Version
     */
    public function getParent()
    {
        return $this->parent;
    }

    /**
     * @param Version $parent
     * @return Version
     */
    public function setParent($parent)
    {
        $this->parent = $parent;
        return $this;
    }


}
