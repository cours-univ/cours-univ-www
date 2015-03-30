<?php

// Ici, on charge le moteur de templates, Twig.
$app->register(new Silex\Provider\TwigServiceProvider(), array(
    // Et on le configure ici.

    // Ici, on définit le chemin vers les fichiers templates.
    'twig.path' => __DIR__ . '/../../views'

    //En parlant de template, si on allait en voir une ?
    // `views/home/index.html.twig`
));

$app['twig'] = $app->share($app->extend('twig', function (\Twig_Environment $twig, Silex\Application $app) use($app) {
    $twig->addExtension(
        new \CoursUniv\Markdown\Twig\CoursUnivMarkdownExtension(
            $app['markdown.parser']
        )
    );

    $twig->addFunction(new \Twig_SimpleFunction('asset', function ($asset) use ($app) {
        /** @var $request \Symfony\Component\HttpFoundation\Request*/
        $request = $app['request'];
        return sprintf($request->getBasePath().'%s', ltrim($asset, '/'));
    }));


    return $twig;
}));