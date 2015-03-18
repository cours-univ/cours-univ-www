<?php

/* Ce fichier est le point de départ de l'application. Toute page demandée par
le client appelle en réalité ce fichier. Nous verrons plus tard comment faire
pour proposer une page différente en fonction de la requete de l'utilisateur  */


// Cette ligne permet de charger automatiquement toutes les dépendancs du projet.
require_once __DIR__.'/../vendor/autoload.php';

/* Ainsi, pas besoin d'avoir défini la classe Silex\Application, puisque
l'autoloader sait où chercher pour trouver la classe ! */
$app = new Silex\Application();

/* Ensuite, on configure notre framework ... */
require __DIR__.'/../app/bootstrap.php';

/* Et on le fait répondre à la requete de l'utilisateur ! */
$app->run();

/* Le role de Silex est, en fonction de la configuration qu'on lui donne, de 
transformer la requete de l'utilisateur en réponse. C'est ce que fait la méthode
`run`. Maintenant il est quesstion de configurer Silex. Rendez-vous dans le
fichier `app/bootstrap.php` ! */