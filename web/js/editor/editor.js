var input = document.getElementById('input');
input.focus();
var timer = null;
var dashMode = false;

var characterExcept =[
    {
        charac : '*',
        characOppos : '*',
        keyCodeCharac : 220,
        keyCodeCharacOppos : 220,
        keyCodeCharacOppos2 : undefined,
        charCode : ('*').charCodeAt(0),
        charCodeOppos : ('*').charCodeAt(0) 
    },
    {
        charac : "'",
        characOppos : "'",
        keyCodeCharac : 52,
        keyCodeCharacOppos : 52,
        keyCodeCharacOppos2 : undefined,
        charCode : ("'").charCodeAt(0),
        charCodeOppos : ("'").charCodeAt(0) 
    }
]

var character = [
    {
        charac : '(',
        characOppos : ')',
        keyCodeCharac : 53,
        keyCodeCharacOppos : 219,
        keyCodeCharacOppos2 : 169,
        charCode : ('(').charCodeAt(0),
        charCodeOppos : (')').charCodeAt(0)

    },
    {
        charac : '{',
        characOppos : '}',
        keyCodeCharac : 52,
        keyCodeCharacOppos : 187,
        keyCodeCharacOppos2 : 61,
        charCode : ('{').charCodeAt(0),
        charCodeOppos : ('}').charCodeAt(0)
    },
    {
        charac : '[',
        characOppos : ']',
        keyCodeCharac : 53,
        keyCodeCharacOppos : 219,
        charCode : ('[').charCodeAt(0),
        charCodeOppos : (']').charCodeAt(0)
    },
    {
        charac : '"',
        characOppos : '"',
        keyCodeCharac : 51,
        keyCodeCharacOppos : 51,
        charCode : ('"').charCodeAt(0),
        charCodeOppos : ('"').charCodeAt(0)
    }
]

input.onkeydown = function(e){

	main();


    var actualKey = (e || window.event).which; //code clavier de la touche appuyé
    var shiftKey = (e || window.event).shiftKey; //booleen : true si shift appuyé

    //tout les caracteres selectionnés
    var selection = this.value.substring(this.selectionStart, this.selectionEnd);

    //caractere avant et apres le curseur
    var previousChar = this.value.substring((this.selectionStart-1), this.selectionStart);
    var nextChar = this.value.substring(this.selectionStart, (this.selectionStart+1));

    console.log(actualKey);

    if(!deleteAutocomplete(this, actualKey, nextChar, previousChar)){
        autocomplete(this, actualKey, selection);
        addCodeQuote(this, actualKey, e, selection, previousChar);
        dashMod(this, actualKey, selection, previousChar);
    }
    writeTabulation(this, actualKey, e, shiftKey, selection);
    unWriteTabulation(this, actualKey, e, shiftKey, previousChar, nextChar, selection);
}

function main(){
    resetTimer(timer);
    timer = setTimeout(function(){
        appelAjax();
    }, 500);
    input.focus();
}

function resetTimer(timer){
    clearTimeout(timer);
}

function appelAjax(){
    $.post( "/editor", {
        markup: $('#input').val()
    },function( data ) {
        $( "#result" ).html(data);
        $('pre code').each(function(i, block){
            hljs.highlightBlock(block);
        })
    });
}


window.onload = function(){
    input.value =   "# Bienvenue dans l'éditeur de Markdown" + 
                    String.fromCharCode(10) + String.fromCharCode(10) +
                    "Ce que vous voyez ci-dessus est un titre de niveau 1 (h1). Le niveau correspond au nombre de # devant le titre"  + 
                    String.fromCharCode(10) + String.fromCharCode(10) +
                    "## Les fonctionnalités de l'éditeur"+ 
                    String.fromCharCode(10) + String.fromCharCode(10) +
                    "Cet éditeur permet d'éditer un cours et du code avec simplicité avec une multitude de function." + 
                    String.fromCharCode(10) + String.fromCharCode(10) +
                    " - ### *Liste*" + 
                    String.fromCharCode(10) + String.fromCharCode(10) +
                    "Vous voulez créé une liste? Rien de plus simple, allez a la ligne et ajouté un tiret! L'éditeur ajoutera automatiquement" + 
                    " l'indentation nécessaire. De plus, si après le premier élément de votre liste vous allez a la ligne, l'éditeur ajoutera" +
                    " automatiquement l'indentation et le tiret. Allez deux fois a la ligne pour finir votre liste! Essayez : "
                     + String.fromCharCode(10) + String.fromCharCode(10) +
                    " - ### *Auto complétion sur les caractères spéciaux*" + 
                    String.fromCharCode(10) + String.fromCharCode(10) +
                    "Si vous souhaitez ajouter, par exemple, des parenthèses autour de cette phrase, vous n'avez qu'a la sélectionner et appuyer sur la touche parenthèse ( ! La parenthèse ouvrante et fermante se placeront automatiquement de chaque coté de votre sélection." + String.fromCharCode(10) + String.fromCharCode(10) +
                    "Quand vous éditez du code, il est assez ennuyeux d'ajouter sois même les parenthèse, les accolades ou les crochets ouvrants et fermants. Cet éditeur permet donc de compléter automatiquement votre saisie." + String.fromCharCode(10) + String.fromCharCode(10) +
                    " - ### Insertion de portion de code" + 
                    String.fromCharCode(10) + String.fromCharCode(10) +
                    "Si vous souhaité insérer du code plus facilement, un raccourci essentiel est a connaitre : `ctrl + alt + c`." + 
                    String.fromCharCode(10) + String.fromCharCode(10) +
                    "Ce raccourci ajoutera automatiquement les caractères spéciaux nécessaires à l'insertion de portion de code sous cette forme :" + 
                    String.fromCharCode(10) + String.fromCharCode(10) +
                    "```<nom du langage>" + 
                    String.fromCharCode(10) +
                    "<Votre code>" + 
                    String.fromCharCode(10) +
                    "```" + 
                    String.fromCharCode(10) + String.fromCharCode(10) +
                    "Il est également possible d’insérer du code dans une phrase avec `alt + c` qui ajoutera les caractères necessaires." + 
                    String.fromCharCode(10) + String.fromCharCode(10) +
                    "Si votre code est ** `ce mot` ** alors sélectionnez le et faite `alt + c`." +
                    String.fromCharCode(10) + String.fromCharCode(10) +
                    "## Les fonctionnalités du Markdown" + 
                    String.fromCharCode(10) + String.fromCharCode(10) +
                    "Le Markdown permet de nombreuse chose que je vais répertorier dans le tableau si dessous : " + 
                    String.fromCharCode(10) + String.fromCharCode(10) +
                    "Symbole             |   Fonctionnalité" + 
                    String.fromCharCode(10) +
                    ":-------------------|:--------------------: " + 
                    String.fromCharCode(10) +
                    "  `*texte*`         |  *Mettre en italique*" + 
                    String.fromCharCode(10) +
                    "  `**texte**`       |  **Mettre en gras**" + 
                    String.fromCharCode(10) +
                    " - Martin           |  Faire une liste" + 
                    String.fromCharCode(10) +
                    "   #Kevin           |  Titre niveau 1 (h1)" + 
                    String.fromCharCode(10) +
                    "   ##Kevin          |  Titre niveau 2 (h2)" + 
                    String.fromCharCode(10) +
                    "  ###Kevin          |  Titre niveau 3 (h3)" + 
                    String.fromCharCode(10) +
                    "   `<u>`            |  <u>Souligé" + 
                    String.fromCharCode(10) +
                    "   `<s>`            |  <s>Rayé" + 
                    String.fromCharCode(10) +
                    "   `<q>`            |  <q>Citation" + 
                    String.fromCharCode(10) +
                    "    ```             | `Encadrer du code`" + 
                    String.fromCharCode(10) + String.fromCharCode(10) +
                    String.fromCharCode(10) + String.fromCharCode(10) +
                    String.fromCharCode(10) + String.fromCharCode(10) +
                    String.fromCharCode(10) + String.fromCharCode(10) +
                    String.fromCharCode(10) + String.fromCharCode(10) +
                    String.fromCharCode(10) + String.fromCharCode(10) +
                    String.fromCharCode(10) + String.fromCharCode(10) +
                    String.fromCharCode(10) + String.fromCharCode(10) +
                    String.fromCharCode(10) + String.fromCharCode(10) +
                    String.fromCharCode(10) + String.fromCharCode(10) +
                    String.fromCharCode(10) + String.fromCharCode(10);

    appelAjax();
}