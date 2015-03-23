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

    //console.log(actualKey);

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
