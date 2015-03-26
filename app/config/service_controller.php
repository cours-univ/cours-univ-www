<?php
/**
 * Created by PhpStorm.
 * User: palra
 * Date: 26/03/15
 * Time: 18:38
 */

/** @var $app \Silex\Application */

use Silex\Provider;
$app->register(new Provider\ServiceControllerServiceProvider());