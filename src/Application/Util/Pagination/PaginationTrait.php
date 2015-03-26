<?php
/**
 * Created by PhpStorm.
 * User: palra
 * Date: 26/03/15
 * Time: 14:29
 */

namespace Application\Util\Pagination;


trait PaginationTrait
{
    /**
     * @var int
     */
    private $totalItems;

    /**
     * @var int
     */
    private $currentPage;

    /**
     * @var int
     */
    private $itemsPerPage;

    /**
     * @var int
     */
    private $neighbours = 4;

    /*=================================================================================================================
       Pagination relative stuff
     =================================================================================================================*/

    public function getLimit()
    {
        return $this->getItemsPerPage();
    }

    public function getOffset()
    {
        return abs(intval($this->getCurrentPage() * $this->getItemsPerPage() - $this->getItemsPerPage()));
    }

    public function getTotalPages()
    {
        return (int) ceil($this->getTotalItems() / $this->getItemsPerPage());
    }

    public function getListing()
    {
        $out = array();
        if($this->getTotalItems() != 0 && $this->getTotalPages() != 1) {
            for(
                $i = max(1, $this->getCurrentPage() - $this->getNeighbours());
                $i < $this->getCurrentPage() - 1;
                $i++)
            {
                $out[$i] = PaginationInterface::TAG_PREVIOUS;
            }

            for(
                $i =  $this->getCurrentPage() + 1;
                $i < min($this->getTotalPages(), $this->getCurrentPage() + $this->getNeighbours());
                $i++)
            {
                $out[$i] = PaginationInterface::TAG_NEXT;
            }

            if(($this->getCurrentPage() - $this->getNeighbours() - 1) > 1)
                $out[$this->getCurrentPage() - $this->getNeighbours() - 1] = PaginationInterface::TAG_LESS;

            if(($this->getCurrentPage() + $this->getNeighbours() + 1) < $this->getTotalPages())
                $out[$this->getCurrentPage() + $this->getNeighbours() + 1] = PaginationInterface::TAG_MORE;

            $out[1] = PaginationInterface::TAG_FIRST;
            $out[$this->getTotalPages()] = PaginationInterface::TAG_LAST;
            $out[$this->getCurrentPage()] = PaginationInterface::TAG_CURRENT;

            ksort($out);
        }

        return $out;
    }

    /*=================================================================================================================
       Getters/Setters
     =================================================================================================================*/

    /**
     * @return int
     */
    public function getNeighbours()
    {
        return $this->neighbours;
    }

    /**
     * @param int $neighbours
     * @return $this
     */
    public function setNeighbours($neighbours)
    {
        if($neighbours <= 0) {
            throw new \LogicException('Number of neighbours must be at least 1');
        }

        $this->neighbours = (int) $neighbours;
        return $this;
    }

    /**
     * @return int
     */
    public function getTotalItems()
    {
        return $this->totalItems;
    }

    /**
     * @param int $totalItems
     * @return $this
     */
    public function setTotalItems($totalItems)
    {
        if($totalItems < 0) {
            throw new \LogicException('Number of items can\'t be negative');
        }

        $this->totalItems = (int) $totalItems;
        return $this;
    }

    /**
     * @return int
     */
    public function getCurrentPage()
    {
        return $this->currentPage;
    }

    /**
     * @param int $currentPage
     * @return $this
     */
    public function setCurrentPage($currentPage)
    {
        $this->currentPage = min(max((int) $currentPage, 1), $this->getTotalPages());
        return $this;
    }

    /**
     * @return int
     */
    public function getItemsPerPage()
    {
        return $this->itemsPerPage;
    }

    /**
     * @param int $itemsPerPage
     * @return $this
     */
    public function setItemsPerPage($itemsPerPage)
    {
        if((int) $itemsPerPage <= 0) {
            throw new \LogicException('Number of items per page must be at least');
        }

        $this->itemsPerPage = (int) $itemsPerPage;
        return $this;
    }

}