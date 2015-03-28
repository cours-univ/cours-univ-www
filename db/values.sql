
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (1, '# Base de Données - Le modèle relationnel

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
', '2015-02-12 15:53:00.505000', '', NULL, 'drattak');

INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (2, 'Lorem ipsum 2', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (3, 'Lorem ipsum 3', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (4, 'Lorem ipsum 4', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (5, 'Lorem ipsum 5', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (6, 'Lorem ipsum 6', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (7, 'Lorem ipsum 7', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (8, 'Lorem ipsum 8', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (9, 'Lorem ipsum 9', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (10, 'Lorem ipsum 10', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (11, 'Lorem ipsum 11', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (12, 'Lorem ipsum 12', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (13, 'Lorem ipsum 13', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (14, 'Lorem ipsum 14', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (15, 'Lorem ipsum 15', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (16, 'Lorem ipsum 16', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (17, 'Lorem ipsum 17', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (18, 'Lorem ipsum 18', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (19, 'Lorem ipsum 19', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (20, 'Lorem ipsum 20', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (21, 'Lorem ipsum 21', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (22, 'Lorem ipsum 22', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (23, 'Lorem ipsum 23', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (24, 'Lorem ipsum 24', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (25, 'Lorem ipsum 25', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (26, 'Lorem ipsum 26', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (27, 'Lorem ipsum 27', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (28, 'Lorem ipsum 28', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (29, 'Lorem ipsum 29', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (30, 'Lorem ipsum 30', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (31, 'Lorem ipsum 31', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (32, 'Lorem ipsum 32', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (33, 'Lorem ipsum 33', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (34, 'Lorem ipsum 34', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (35, 'Lorem ipsum 35', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (36, 'Lorem ipsum 36', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (37, 'Lorem ipsum 37', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (38, 'Lorem ipsum 38', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (39, 'Lorem ipsum 39', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (40, 'Lorem ipsum 40', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (41, 'Lorem ipsum 41', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (42, 'Lorem ipsum 42', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (43, 'Lorem ipsum 43', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (44, 'Lorem ipsum 44', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (45, 'Lorem ipsum 45', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (46, 'Lorem ipsum 46', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (47, 'Lorem ipsum 47', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (48, 'Lorem ipsum 48', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');
INSERT INTO public.version (id_version, content_version, datetime_version, comment_version, previous_version, author) VALUES (49, 'Lorem ipsum 49', '2015-03-13 16:36:00.505000', '', NULL, 'drattak');


INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (1, 'Le modèle relationnel', 1, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (2, 'Lorem ipsum 2', 2, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (3, 'Lorem ipsum 3', 3, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (4, 'Lorem ipsum 4', 4, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (5, 'Lorem ipsum 5', 5, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (6, 'Lorem ipsum 6', 6, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (7, 'Lorem ipsum 7', 7, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (8, 'Lorem ipsum 8', 8, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (9, 'Lorem ipsum 9', 9, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (10, 'Lorem ipsum 10', 10, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (11, 'Lorem ipsum 11', 11, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (12, 'Lorem ipsum 12', 12, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (13, 'Lorem ipsum 13', 13, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (14, 'Lorem ipsum 14', 14, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (15, 'Lorem ipsum 15', 15, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (16, 'Lorem ipsum 16', 16, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (17, 'Lorem ipsum 17', 17, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (18, 'Lorem ipsum 18', 18, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (19, 'Lorem ipsum 19', 19, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (20, 'Lorem ipsum 20', 20, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (21, 'Lorem ipsum 21', 21, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (22, 'Lorem ipsum 22', 22, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (23, 'Lorem ipsum 23', 23, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (24, 'Lorem ipsum 24', 24, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (25, 'Lorem ipsum 25', 25, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (26, 'Lorem ipsum 26', 26, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (27, 'Lorem ipsum 27', 27, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (28, 'Lorem ipsum 28', 28, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (29, 'Lorem ipsum 29', 29, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (30, 'Lorem ipsum 30', 30, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (31, 'Lorem ipsum 31', 31, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (32, 'Lorem ipsum 32', 32, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (33, 'Lorem ipsum 33', 33, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (34, 'Lorem ipsum 34', 34, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (35, 'Lorem ipsum 35', 35, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (36, 'Lorem ipsum 36', 36, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (37, 'Lorem ipsum 37', 37, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (38, 'Lorem ipsum 38', 38, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (39, 'Lorem ipsum 39', 39, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (40, 'Lorem ipsum 40', 40, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (41, 'Lorem ipsum 41', 41, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (42, 'Lorem ipsum 42', 42, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (43, 'Lorem ipsum 43', 43, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (44, 'Lorem ipsum 44', 44, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (45, 'Lorem ipsum 45', 45, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (46, 'Lorem ipsum 46', 46, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (47, 'Lorem ipsum 47', 47, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (48, 'Lorem ipsum 48', 48, 'modèle relationnel');
INSERT INTO public.course (id_course, name_course, current_version_course, description) VALUES (49, 'Lorem ipsum 49', 49, 'modèle relationnel');