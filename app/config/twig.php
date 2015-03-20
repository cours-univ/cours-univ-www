<?php

// Ici, on charge le moteur de templates, Twig.
$app->register(new Silex\Provider\TwigServiceProvider(), array(
    // Et on le configure ici.

    // Ici, on définit le chemin vers les fichiers templates.
    'twig.path' => __DIR__ . '/../../views'

    //En parlant de template, si on allait en voir une ?
    // `views/home/index.html.twig`
));