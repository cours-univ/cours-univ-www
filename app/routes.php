<?php

/* On entre dans le vif du sujet. C'est ici que l'on va dire à Silex à quelle
requetes répondre, et surtout comment répondre ! 
On va donc commencer par des rappels : HTTP. Oui, http://www.google.fr par
exemple. C'est un protocole, une manière formalisée pour communiquer entre
un serveur et un client. Le client envoie une requete, et le serveur lui répond.

Une requete = une réponse.

Pour le moment, on ne va prendre en charge qu'une seule requete : une requete
GET de la racine du site : `GET /` en HTTP. `GET` c'est une méthode. Il en existe
plusieurs en HTTP, et GET est la plus courante. Elle permet d'expliciter ce que 
l'on veut faire : si je dis `GET /messages`  on comprend qu'on veut la liste
des messages, et si on dit `POST /messages` on comprend de meme que l'on veut 
poster un nouveau message.  En parlant de `/messages`, cette portion, c'est l'URL,
la ressource que l'on veut obtenir.

Silex permet donc de router chaque requete vers une fonction qui va la traiter, en
fonction de la méthode HTTP et de l'URL demandée. */

// Ici, pour chaque requete `GET /` (la page d'accueil) ...
$app->get('/', function() use($app) {
  // On exécute cette fonction ! 
  // Et devinez quoi, cette fonction va afficher le rendu d'un texte en 
  // Markdown !
  
  // Donc, on charge le fichier en question
  $source = dirname(__FILE__) . '/../web/sources/test.md';

  // On charge le parseur de Markdown
  $parser = new \CoursUniv\Markdown\CoursUnivMarkdown();
  $config = HTMLPurifier_Config::createDefault();
  $purifier = new HTMLPurifier($config);

  // On compile le tout et on stocke le résultat dans une variable ...
  $rendered = $purifier->purify($parser->parse(file_get_contents($source)));

  return $app['twig']->render('home/index.html.twig', array(
     'rendered' => $rendered
  ));

  /* J'ai caché pas mal de choses, mais je ne peux pas en dire plus pour le 
  moment ... */
});