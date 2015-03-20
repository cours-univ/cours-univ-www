Cours Université Paris 13
=========================

Site d'hébergement de cours, initialement crée pour l'université Paris 13

## Installation 

### Composer

* Téléchargez Composer : [https://getcomposer.org/download/](https://getcomposer.org/download/)
* Dans un shell exécutez la commande `php composer.phar install`

### Serveur de développement

Dans un shell, depuis la racine du projet, exécutez la commande `./bin/php-server`

## Développement

### Architecture des fichiers

Le projet s'organise de la sorte :

* `bin/` contient des scripts utiles au développement.
* `app/` contient tout ce qui est relatif à la configuration de notre site.
* `src/` contient le code métier de l'application.
* `views/` contient toutes les pages HTML.
* `web/` est la racine de notre serveur de développement, et contient tout
  ce que le client peut voir.

### Comprendre le code

Démarrez la lecture de la documentation en commençant par le fichier `web/index.php`.