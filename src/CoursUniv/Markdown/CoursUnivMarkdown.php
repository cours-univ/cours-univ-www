<?php

namespace CoursUniv\Markdown;

use cebe\markdown\GithubMarkdown;

class CoursUnivMarkdown extends GithubMarkdown
{
	use Block\AnchorHeadline;
	
	public $html5 = true;
}