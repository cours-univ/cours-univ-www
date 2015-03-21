<?php

// Register service providers.
$app->register(new Silex\Provider\DoctrineServiceProvider());

// Register services.
$app['dao.course'] = $app->share(function ($app) {
    return new \CoursUniv\DAO\CourseDAO($app['db']);
});