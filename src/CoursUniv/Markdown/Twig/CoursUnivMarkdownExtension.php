<?php
/**
 * Created by PhpStorm.
 * User: palra
 * Date: 20/03/15
 * Time: 22:35
 */

namespace CoursUniv\Markdown\Twig;

use CoursUniv\Markdown\CoursUnivMarkdown;


class CoursUnivMarkdownExtension extends \Twig_Extension
{
    protected $md;

    public function __construct(CoursUnivMarkdown $md)
    {
        $this->md = $md;
    }

    public function getName()
    {
        return 'coursunivmarkdown';
    }

    public function getFilters() {
        return array(
            'markdown' => new \Twig_Filter_Method($this, 'parse', array(
                'is_safe' => array('html')
            )),
        );
    }

    public function parse($input)
    {
        return $this->md->parse($input);
    }
}