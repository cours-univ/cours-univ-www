

var input = document.getElementById('input');
input.focus();
var result = document.getElementById('result');
var timer = null;
var previousChar;

var character = [
    {
        charac : '(',
        characOppos : ')',
        keyCodeCharac : 53,
        exept : false
    },
    {
        charac : '{',
        characOppos : '}',
        keyCodeCharac : 52,
        exept : false
    },
    {
        charac : '[',
        characOppos : ']',
        keyCodeCharac : 53,
        exept : false
    },
    {
        charac : '"',
        characOppos : '"',
        keyCodeCharac : 51,
        exept : false
    },
    {
        charac : '*',
        characOppos : '*',
        keyCodeCharac : 220,
        exept : true
    },
    {
        charac : "'",
        characOppos : "'",
        keyCodeCharac : 52,
        exept : false
    },
]




$('.tabDisable').on('keydown', function(e)
{
    var actualKey = (e || window.event).keyCode;
    var shiftKey = (e || window.event).shiftKey;
    var altKey = (e || window.event).altKey;
    var ctrlKey = (e || window.event).ctrlKey;

    function insert(charNm, self, charOppos){
        var beforeSelection = self.value.substring(0, self.selectionStart-1);
        var afterSelection = self.value.substring(self.selectionEnd);
        var myString = beforeSelection + charNm + selection + charOppos + afterSelection;
        self.value = myString;
        self.setSelectionRange((beforeSelection.length + 1), (beforeSelection.length + selection.length + 1));
    }

    function delet(self){
        var beforeSelection = self.value.substring(0, self.selectionStart);
        var selection = self.value.substring(self.selectionStart+1, self.selectionEnd+1);
        var afterSelection = self.value.substring(self.selectionEnd+1);
        self.value = beforeSelection + selection + afterSelection;
        self.setSelectionRange(beforeSelection.length, beforeSelection.length + selection.length);
    }
    var selection = this.value.substring(this.selectionStart, this.selectionEnd);


    console.log(actualKey);
    if(actualKey === 67 && altKey && ctrlKey){
        e.preventDefault();
        console.log('emlv');
    }

    //setTimeout obligatoire
    //Gere l'autocompletition quand on insere un caractère contenu dans var charater
    setTimeout(function(){
        previousChar = (this.value.substring((this.selectionStart-1), this.selectionStart));

        for(var i = 0; i < character.length; i++){
            if(previousChar === character[i].charac && actualKey == character[i].keyCodeCharac && character[i].exept === false){
                insert(character[i].charac, this, character[i].characOppos);
                break;
            }
        }

    }.bind(this), 10);

    //caractere avant et apres le curseur
    var nextChar = this.value.substring(this.selectionStart, (this.selectionStart+1));
    previousChar = this.value.substring((this.selectionStart-1), this.selectionStart);

    //delete le charatere opposé s'il est collé a son opposé comme : ()
    for(var i = 0; i < character.length; i++){
        if(actualKey === 8 && previousChar === character[i].charac && nextChar === character[i].characOppos){
            delet(this);
            break
        }
    }

    //Gere la tabulation
    if (actualKey == 9 && !shiftKey){
        console.log(shiftKey);
        e.preventDefault();
        var tabString = String.fromCharCode(9);

        var beforeSelection = this.value.substring(0, this.selectionStart);
        var afterSelection = this.value.substring(this.selectionEnd);
        this.value = beforeSelection + tabString + selection + afterSelection;
        this.setSelectionRange((beforeSelection.length) + tabString.length, beforeSelection.length + tabString.length + selection.length);

        this.focus();
    }

    //Gere le shift + tabulation
    if(actualKey == 9 && shiftKey){
        e.preventDefault();
        var modified = false;
        //Cas de la tabulation derriere le curseur
        if(previousChar === '	'){
            var beforeSelection = this.value.substring(0, this.selectionStart-1);
            var afterSelection = this.value.substring(this.selectionEnd);
            this.value = beforeSelection + selection + afterSelection;
            this.setSelectionRange(beforeSelection.length, beforeSelection.length + selection.length);
            modified = true;
        }
        //cas de la tabluation devant le curseur
        else if(nextChar === '	'){
            var beforeSelection = this.value.substring(0, this.selectionStart);
            var selection = this.value.substring(this.selectionStart+1, this.selectionEnd+1);
            var afterSelection = this.value.substring(this.selectionEnd+1);
            this.value = beforeSelection + selection + afterSelection;
            this.setSelectionRange(beforeSelection.length, beforeSelection.length + selection.length);
            modified = true;
        }
        this.focus();
    }
});

function resetTimer(){
    clearTimeout(timer);
}

function change(e) {
    resetTimer();
    timer = setTimeout(function(){
        appelAjax();
    }, 500);
    input.focus();
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