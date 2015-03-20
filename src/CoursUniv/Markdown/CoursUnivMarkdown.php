<?php

namespace CoursUniv\Markdown;

use cebe\markdown\GithubMarkdown;

class CoursUnivMarkdown extends GithubMarkdown
{
	use Block\AnchorHeadline;
	
	public $html5 = true;

    public function parse($text)
    {
        $config = \HTMLPurifier_Config::createDefault();
        $purifier = new \HTMLPurifier($config);
        return $purifier->purify(parent::parse($text));
    }
}