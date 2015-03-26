<?php
/**
 * Created by PhpStorm.
 * User: palra
 * Date: 26/03/15
 * Time: 18:35
 */

/** @var $app \Silex\Application */

use Silex\Provider;

$app->register(new Provider\WebProfilerServiceProvider(), array(
    'profiler.cache_dir' => __DIR__.'/../../cache/profiler',
    'profiler.mount_prefix' => '/_profiler', // this is the default
));
$app->register(new Sorien\Provider\DoctrineProfilerServiceProvider());