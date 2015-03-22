var input = document.getElementById('input');
input.focus();
var timer = null;

var character = [
    {
        charac : '(',
        characOppos : ')',
        keyCodeCharac : 53
    },
    {
        charac : '{',
        characOppos : '}',
        keyCodeCharac : 52
    },
    {
        charac : '[',
        characOppos : ']',
        keyCodeCharac : 53
    },
    {
        charac : '"',
        characOppos : '"',
        keyCodeCharac : 51
    }
]

input.onkeydown = function(e){

	main();

    var actualKey = (e || window.event).keyCode;
    var shiftKey = (e || window.event).shiftKey;

    var selection = this.value.substring(this.selectionStart, this.selectionEnd);

    //caractere avant et apres le curseur
    var nextChar = this.value.substring(this.selectionStart, (this.selectionStart+1));
    var previousChar = this.value.substring((this.selectionStart-1), this.selectionStart);

    //console.log(actualKey);

    autocomplete(this, actualKey, selection);
    addCodeQuote(this, actualKey, e, selection);
    writeTabulation(this, actualKey, e, shiftKey, selection);
    unWriteTabulation(this, actualKey, e, shiftKey, previousChar, nextChar, selection);
    deleteAutocomplete(this, actualKey, nextChar, previousChar);
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
