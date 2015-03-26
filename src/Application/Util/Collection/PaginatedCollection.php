<?php
/**
 * Created by PhpStorm.
 * User: palra
 * Date: 26/03/15
 * Time: 13:35
 */

namespace Application\Util\Collection;

use Application\Util\Pagination\PaginationInterface;
use Application\Util\Pagination\PaginationTrait;
use \ArrayAccess;
use \Iterator;
use \Countable;

class PaginatedCollection extends AbstractCollection implements ArrayAccess, Iterator, Countable, PaginationInterface
{
    use PaginationTrait;

    /**
     * @param array $objects
     * @param int $totalItems
     * @param int $currentPage
     * @param int $itemsPerPage
     * @param int $neighbours
     *
     * `$objects` have to be a simple array, any non-integer key will be transformed to an integer one.
     */
    public function __constructor(array $objects = array())
    {
        parent::__constructor($objects);
    }

}