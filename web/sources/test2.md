# Cours 1
## C'est quoi un objet?

* Données : définissent l'objet
* Méthodes : actions que l'on peut accomplir avec l'objet

Les deux sont comprises dans l'objet

### Classe : définit les caractéristiques d'une certaines catégorie d'objet

```java
public class PointPlan
{
    private float abscisse;
    private float ordonnee;

    public PointPlan()
    {
      this.abscisse = 0;
      this.ordonnee = 0;
    }

    public void getAbs()
    {
      return this.abscisse;
    }
}
```