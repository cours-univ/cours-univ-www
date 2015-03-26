<?php
/**
 * Created by PhpStorm.
 * User: palra
 * Date: 26/03/15
 * Time: 14:39
 */

namespace Application\Util\Collection;

use \ArrayAccess;
use \Iterator;
use \Countable;

abstract class AbstractCollection implements ArrayAccess, Iterator, Countable
{
    /**
     * @var array
     */
    private $objects;

    /**
     * @var int
     */
    private $position = 0;

    /**
     * @param array $objects
     * `$objects` have to be a simple array, any non-integer key will be transformed to an integer one.
     */
    public function __constructor(array $objects = array())
    {
        $this->objects = array_values($objects);
    }


    /*=================================================================================================================
       ArrayAccesss Implementation
     =================================================================================================================*/


    /**
     * @param mixed $offset
     * @param mixed $value
     */
    public function offsetSet($offset, $value)
    {
        if(is_null($offset)) {
            $this->objects[] = $value;
        } else {
            $this->objects[$offset] = $value;
        }
    }

    /**
     * @param mixed $offset
     */
    public function offsetUnset($offset)
    {
        unset($this->objects[$offset]);
    }

    /**
     * @param mixed $offset
     * @return mixed
     */
    public function offsetGet($offset)
    {
        return $this->objects[$offset];
    }

    /**
     * @param mixed $offset
     * @return bool
     */
    public function offsetExists($offset)
    {
        return isset($this->objects[$offset]);
    }


    /*=================================================================================================================
       Iterator Implementation
     =================================================================================================================*/

    /**
     * @return mixed.
     */
    public function current()
    {
        return $this->objects[$this->position];
    }

    public function next()
    {
        $this->position++;
    }

    public function key()
    {
        return $this->position;
    }

    public function valid()
    {
        return $this->offsetExists($this->position);
    }

    public function rewind()
    {
        $this->position = 0;
    }

    /*=================================================================================================================
       Countable Implementation
     =================================================================================================================*/


    public function count()
    {
        return count($this->objects);
    }

    /**
     * @return array
     */
    public function getObjects()
    {
        return $this->objects;
    }

    /**
     * @param array $objects
     * @return $this
     */
    public function setObjects($objects)
    {
        $this->objects = array_values($objects);
        return $this;
    }
}