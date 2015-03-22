var input = document.getElementById('input');
input.focus();
var timer = null;
var dashMode = false;

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
        keyCodeCharacOppos : 61,
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

function dashMod(self, actualKey, selection){
    setTimeout(function(){
        var previousChar = (self.value.substring(self.selectionStart - 1, self.selectionStart));
        var previousChar2 = (self.value.substring(self.selectionStart - 2, self.selectionStart - 1));
        var nextChar =(self.value.substring(self.selectionStart, self.selectionStart + 1));

        if(previousChar === '-' && previousChar2 === ' '){
            dashMode = true;
            return 0;
        }

        if((previousChar2.charCodeAt(0) === 10 && previousChar.charCodeAt(0) === 10) || (previousChar2.charCodeAt(0) === 10 && previousChar !== ' ')){
            dashMode = false;

            // var beforeSelection = self.value.substring(0, self.selectionStart);
            // var afterSelection = self.value.substring(self.selectionEnd);
            // self.value = beforeSelection + selection + afterSelection;
            // self.setSelectionRange(beforeSelection.length, beforeSelection.length + selection.length);
        }

        if(dashMode === true && previousChar2.charCodeAt(0) === 10 && previousChar === ' ' && nextChar !== '-' && actualKey !== 8){
            insertChar(self, '', selection, '- ');
        }

    }, 10);
}

input.onkeydown = function(e){

	main();

    console.log(dashMode);

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
        dashMod(this, actualKey, selection);
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
