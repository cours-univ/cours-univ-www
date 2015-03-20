INSERT INTO public.course (id_course, name_course, content_course) VALUES (1, 'Apprends le Java', '# Base de Données - Le modèle relationnel

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




# Java - Cours 3 - Tableaux

[blocked xss](http://"onmouseover="alert(1))

## Rappel

Un tableau est une structure de données qui contient un ensemble d''éléments de même type. Chaque élément est associé a un indice :

*Exemple :* 

Ceci est un tableau `t` contenant `n` éléments de type `float`.

  0  |  1  |  2  |..|n-1 
-----|-----|-----|--|---
 5.2f|-4.7f|13.4f|..|2.5f

`t[2]` correspond a l''indice 2 et donne la valeur 13.4f

## Les tableaux en Java

Un tableau est un objet auquel on accède par une variable référence. Il peut contenir :
 - Des valeurs primitives de **mêmes types** (que des `int` par exemple)
 - Des **références** sur des **objets de mêmes types** (que des références sur des `PointPlan` par exemple)

**Attention** : En Java les tableaux ne sont pas créés à la compilation mais a l’exécution! On dit qu''ils sont **dynamiques**.

##Création d''un tableau

1. Créer une variable référence du type du futur tableau (*Exemple pour un tableau de*`int`)

	```Java
	int[] tab;
	```
2. Créer le tableau avec `new <type du tableau>[<taille>];`

	```Java
	tab = new int[3];
	```
3. Initialiser le tableau

	```Java
for(int i = 0; i < 3; i++){
		tab[i] = i * 3;
	}
	```

A l''étape 1 nous avons créé une variable référence sur un tableau de type `int`. Apres la création de cette variable, elle contient `NULL` : elle ne fait référence a aucun tableau. Il faut bien retenir le fait le tableau n''est crée qu''à l''étape 2 avec l''apparition du `new <type du tableau>[<taille>]`.

## Initialiser un tableau

### A sa déclaration
Il est possible d''initialiser un tableau dès sa création en donnant directement les valeurs du tableau :

```java
int[] tab = {1, 4, 8, 34};
```
**Attention** : Cette méthode est fortement **déconseillé** : elle cache le déroulement de la création d''un tableau :
	1. Création du tableau avec un `new`
	2. Initialisation du tableau avec les valeurs données
	3. Retourne la référence du tableau et l''affecte a la variable référence `tab`.
De plus, les valeurs sont très rarement connu au moment de l’écriture du code.

### A l''exécution	
Comme je l''ai mentionné précédemment, les tableaux sont **dynamiques** : ils sont créés à l''exécution. Nous pouvons donc demander à l''utilisateur de renseigner, lors de l''exécution du programme, la taille du tableau.
Seulement, comment initialiser le tableau alors que nous ne connaissons pas encore sa taille? Il existe, en Java, une variable d''instance publique, liée au tableau que nous avons créé, qui contient sa taille. 
Son nom est `length` et nous pouvons y accéder en faisant `tab.length`

**Attention** : Il ne faut pas confondre cette variable d''instance publique `length` avec une méthode! Faire `tab.length()` produirait a tous les coups une erreur de compilation.

*Exemple complet avec un tableau de int* :

```java
public class Point{

	private int[] tabInt;

	public void remplirTab(){
		Scanner sc = new Scanner(System.in);
		
		this.tabInt = new int[sc.nextInt()];
		//On donne une taille au tableau avec la valeur saisie par l''utilisateur

		for int i = 0; i < tabInt.length; i++){
		//tabInt.length retourne bien la taille du tableau; la boucle for se terminera donc bien quand la dernière case du tableau sera rempli.
			this.tabInt[i] = i * i;
			//On initialise le tableau avec le carré de i
		}
	}
}
```

## Les tableaux de variables-références

Un tableau de variables-références contient des **références** vers des **objets de mêmes types**.

*Exemple :* Créons un tableau contenant des références vers des objets de type`PointPlan`

```java
Poinplan[] tab;
tab = new PointPlan[3];
```

Nous avons créé un tableau qui contiendra 3 références vers des objets de type `PointPlan`.

**Attention**: Ce morceau de code ne créé qu''un tableau! Pour l''instant aucun objet de type `PointPlan` n''a été créé.

### Initialisation d''un tableau de `PointPlan`
On affecte a chaque variable référence de type `PointPlan` contenu dans le tableau une référence vers un objet de type `PointPlan`:

```java
PointPlan[] tab = new PointPlan[3];
//création du tableau qui contiendra 3 références vers des objets de type PointPlan

for(int i = 0; i < tab.length; i++){
	tab[i] = new PointPlan(i, 2*i);
}
```
Pour chaque `i`, on crée un `PointPlan`. `new` retourne la référence de l''objet créé qui est affecté à `tab[i]`.

## Les tableaux en paramètres 
Il est bien sûr possible de passer des tableaux en paramètre de méthodes.

```java
public class StatFloat{
	public StatFloat(float[] tabFloat){
		// Code
	}
}
```

```java
public static void main(String[] args){
	float[] tab = {1.5f, -4.3f, 8.6f};

	StatFloat stat = new StatFloat(tab);
}
```

Ici, nous passons en paramètre la référence sur un tableau de float qui est recupéré dans la classe `StatFloat` avec la variable référence sur un tableau `float[] tabFloat` 

## Retourner un tableau depuis une méthode

Il est possible de passer des tableaux en paramètre mais également d''en retourner

```java
public class Equation{
	private a = 5;
	private b = 15;
	private c = 10;

	public int[] creeTab(){
		int[] tab = new int[3];

		tab[0] = this.a;
		tab[1] = this.b;
		tab[2] = this.c;

		return tab;
	}
}
```

Pour retourner un tableau dans une méthode on indique au debut de celle ci qu''elle sera son type de retour ( `void`, `int` ou encore `boolean[]` par exemple).
');
INSERT INTO public.course (id_course, name_course, content_course) VALUES (2, 'SQL', '# SQL

## C''est cool

```sql
SELECT "Eh ouais";
```');
