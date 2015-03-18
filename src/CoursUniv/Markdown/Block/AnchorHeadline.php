<?php

namespace CoursUniv\Markdown\Block;

use Cocur\Slugify\Slugify;

trait AnchorHeadline
{
	protected $slugifier;
	protected $slugCache = array();

	public function __construct()
	{
		$this->slugifier = new Slugify();
	}

	protected function renderHeadline($block)
	{
		$tag = 'h' . $block['level'];
		$title =  $this->renderAbsy($block['content']);
		$slug = $this->slugifier->slugify($title);

		$i = 0;
		while(isset($this->slugCache[$slug. (($i != 0) ? '-'.$i : '' )]))
		{
			$i++;
		}

		$slug = $slug. ( ($i != 0) ? '-'.$i : '' );
		$this->slugCache[$slug] = true;

		return "<$tag><a name=\"$slug\"></a>" . $title . "</$tag>\n";
	}
}