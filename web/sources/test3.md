# Cours 2

## Communiquer des objets à une méthode

Un objet (l'objet courant) peut avoir recours à d'autres objets

```java
public class PointPlan {
  public boolean egaleA(PointPlan p) {
    return (
      this.getAbscisse() == p.getAbscisse() && 
      this.getOrdinee() == p.getOrdonnee()
    );
  }
}
```

```java
public static void(String[] args) { 
	// ...
	if(p1.egaleA(p2)) { /* ... */ } 
}
```

##Retourner un objet

```java
public PointPlan oppose() { 
	return new PointPlan(-this.getAbscisse(), -this.getOrdonnee()); 
}
```
Le type de retour est un `PointPlan`, la méthode retourne donc une référence vers un objet de type `PointPlan`.

##Retourner plusieurs résultats
On ne peut toujours retourner qu'une valeur, alors si le besoin se fait de retourner plusieurs valeurs, il faut créer une classe encapsulant les valeurs à retourner.

##Objets composés
*Exemple* : Un triangle a 3 points, donc on peut avoir :

```java
public class Triangle {     
	private PointPlan a;     
	private PointPlan b;     
	private PointPlan c; 
	
    public Triangle(float xa, float ya, ...) {         
	    this.a = new PointPlan(xa, ya);
	    this.b = new PointPlan(xb, yb);
        this.c = new PointPlan(xc, yc);
    }
    // ...
}
```

Ici, on crée les `PointPlan` dans la classe, mais on peut également le faire en dehors :

```java
public class Triangle {
	private PointPlan a;
	private PointPlan b;
	private PointPlan c;

    public Triangle(PointPlan a, ...) {
	    this.a = a;
	    this.b = b;
      this.c = c;
    }
    // ...
}
```

##Surcharge d'une méthode
**Signature** = nom de la méthode + nombre de paramètres + type des paramètres + type de retour

Une méthode surchargée est une méthode qui a *(le même nom et)* plusieurs signatures différentes.

##Constructeur par copie
C'est un constructeur qui prend pour argument un argument de même type : permet de créer un clone d'un objet donné.

Un constructeur peut en appeler un autre
.. avec le mot thé `this()`. Rien à voir avec `this`, car `this()` permet d'appeler un autre constructeur.

##Les chaînes de caractères
TMTC ce que c'est. En Java, c'est un objet qui s'appelle `String`.

##Sous forme de litéral
`"bonjour"` est un litéral.
C'est une référence vers un objet de type `String`.

Un objet de type `String` est un objet constant, il ne peut être modifié une fois crée.

