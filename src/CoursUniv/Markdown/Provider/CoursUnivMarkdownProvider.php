<?php
/**
 * Created by PhpStorm.
 * User: palra
 * Date: 20/03/15
 * Time: 13:19
 */

namespace CoursUniv\Markdown\Provider;
use Silex\ServiceProviderInterface;
use Silex\Application;


class CoursUnivMarkdownProvider implements ServiceProviderInterface
{
    public function register(Application $app)
    {
        $parser = new \CoursUniv\Markdown\CoursUnivMarkdown();
        $app['markdown.parser'] = $parser;
    }

    public function boot(Application $app)
    {
    }

}