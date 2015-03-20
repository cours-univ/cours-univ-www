<?php
/* Ici, on chargera toute la configuration de Silex. Elle finira par etre 
relativement complexe, on prendra donc la peine de tout séparer dans des
fichiers distincts. Le seul role de ce fichier et de charger ces fichiers
en question */

// Et on commence avec `routes.php` ! Allez, va voir ce qu'il te dit ce fichier
require_once 'routes.php';

// On commence par charger les paramètres
require_once 'parameters.'.$app['env'].'.php';

// Ici, on charge tous les fichiers php du dossier `config`
foreach (glob(__DIR__.'/config/*.php') as $filename)
{
    require_once $filename;
}

// Et les fichiers propres à l'environnement courant
foreach (glob(__DIR__.'/config/'.$app['env'].'/*.php') as $filename)
{
    require_once $filename;
}

// On se rejoint dans le fichier `config/twig.php`.