INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, next_version) VALUES (1, '# Base de Données - Le modèle relationnel

Ce modèle est différent du précédent : le modèle *entité-association* est super utile pour représenter graphiquement une Base de Données. Mais il est impossible de rentrer ces données dans un logiciel avec le modèle *entité-association*.

Le but est de représenter chaque entité et association sous forme tabulaire. On va donc voir comment passer du modèle *entité-association* au modèle *relationnel*, celui qui sera utilisé pour construire notre BDD directement avec notre **SGBD**.

##Syntaxe générale
	
**NomEntité**(<u>cléPrimaire</u>, attribut1, attribut2, …) où *attribut2* fait référence à *NomAutreEntité*.

- <u>cléPrimaire</u> est une **clé primaire**.
- attribut2 est une clé étrangère faisant référence à la clé primaire de NomAutreEntité. **Il faut l''écrire explicitement**.

##Opérateurs relationnels
	
- Sélection = Sélectionner des lignes (σ)
- Projection = sélectionner des colonnes (∏)
- Union = Réunion de deux tables (∪)
- Intersection = Eléments présents dans les deux tables (∩)
- Difference = R1 - R2 => Retire les elements dans la tables 1 qui sont present dans la table 2 (-)
- Produit cartésien = Toute les combinaisons possible entre les deux tables (x)


 Personne | x|   Cadeau | = | Personne | Cadeau
 :-------:|::|:--------:|:-:|:--------:|:------:
    X     |. |    A     | . |    X     |   A
    Y     |. |    B     | . |    X     |   B
    .     |. |    .     | . |    Y     |   A
    .     |. |    .     | . |    Y     |   B


- Jointure = Sous ensemble du produit cartésien. Produit cartésien avec quelque ligne en moins (⋈). La jointure est une sélection de produit cartésien (produit cartésien à condition que tel et tel condition soit rempli)
- Division = Le résultat affiche les enseignants qui enseigne aux étudiants (÷)
', '2015-02-12 15:53:00.505000', '', NULL);

INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, next_version) VALUES (2, '# Base de Données - Le modèle relationnel

Ce modèle est différent du précédent : le modèle *entité-association* est super utile pour représenter graphiquement une Base de Données. Mais il est impossible de rentrer ces données dans un logiciel avec le modèle *entité-association*.

Le but est de représenter chaque entité et association sous forme tabulaire. On va donc voir comment passer du modèle *entité-association* au modèle *relationnel*, celui qui sera utilisé pour construire notre BDD directement avec notre **SGBD**.

##Syntaxe générale

**NomEntité**(<u>cléPrimaire</u>, attribut1, attribut2, …) où *attribut2* fait référence à *NomAutreEntité*.

- <u>cléPrimaire</u> est une **clé primaire**.
- attribut2 est une clé étrangère faisant référence à la clé primaire de NomAutreEntité. **Il faut l''écrire explicitement**.', '2015-03-13 16:22:00.505000', '', 1);

INSERT INTO public.course (id_course, name_course, current_version_course) VALUES (1, 'Le modèle relationnel', 1);
