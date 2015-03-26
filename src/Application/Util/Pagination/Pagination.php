<?php
/**
 * Created by PhpStorm.
 * User: palra
 * Date: 26/03/15
 * Time: 15:04
 */

namespace Application\Util\Pagination;

class Pagination implements PaginationInterface {

    use PaginationTrait;

    /**
     * @param int $totalItems
     * @param int $currentPage
     * @param int $itemsPerPage
     * @param int $neighbours
     *
     * `$objects` have to be a simple array, any non-integer key will be transformed to an integer one.
     */
    public function __constructor($totalItems, $currentPage, $itemsPerPage, $neighbours)
    {
        $this->setTotalItems($totalItems);
        $this->setCurrentPage($currentPage);
        $this->setItemsPerPage($itemsPerPage);
        $this->setNeighbours($neighbours);
    }
}