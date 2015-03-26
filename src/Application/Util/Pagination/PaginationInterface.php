<?php
/**
 * Created by PhpStorm.
 * User: palra
 * Date: 26/03/15
 * Time: 15:01
 */

namespace Application\Util\Pagination;


interface PaginationInterface
{
    const TAG_FIRST    = 'first';
    const TAG_LESS     = 'less';
    const TAG_PREVIOUS = 'previous';
    const TAG_CURRENT  = 'current';
    const TAG_NEXT     = 'next';
    const TAG_MORE     = 'more';
    const TAG_LAST     = 'last';

    public function getLimit();
    public function getOffset();
    public function getTotalPages();
    public function getListing();
}