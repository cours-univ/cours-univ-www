function insertChar(self, charLeft, selection, charRight){
    var beforeSelection = self.value.substring(0, self.selectionStart);
    var afterSelection = self.value.substring(self.selectionEnd);
    var myString = beforeSelection + charLeft + selection + (charRight || '') + afterSelection;
    self.value = myString;
    self.setSelectionRange((beforeSelection.length + charLeft.length), (beforeSelection.length + charLeft.length + selection.length));
}
//function which delete char next to the cursor (rigth)
function deleteChar(self){
    var beforeSelection = self.value.substring(0, self.selectionStart);
    var selection = self.value.substring(self.selectionStart+1, self.selectionEnd+1);
    var afterSelection = self.value.substring(self.selectionEnd+1);
    self.value = beforeSelection + selection + afterSelection;
    self.setSelectionRange(beforeSelection.length, beforeSelection.length + selection.length);
}
//setTimeout obligatoired
//Gere l'autocompletition quand on insere un caractère contenu dans var character
function autocomplete(self, actualKey, selection){
    setTimeout(function(){
        var previousChar = (self.value.substring(self.selectionStart - 1, self.selectionStart));
        var nextChar =(self.value.substring(self.selectionStart, self.selectionStart + 1));
        var evenInsert = false;
        //Dans tout les cas avec les caractere de var character
        for(var i = 0; i < character.length; i++){
            if(previousChar === character[i].charac && actualKey == character[i].keyCodeCharac){
                insertChar(self, '', selection, character[i].characOppos);
                evenInsert = true;
                break;
            }
        }
        //Que dans le cas d'une selection avec les caractere de var charaterExcept
        for (var i = 0; i < characterExcept.length; i++) {
            if(!evenInsert && (selection.length > 0) && previousChar === characterExcept[i].charac && actualKey == characterExcept[i].keyCodeCharac){
                insertChar(self, '', selection, characterExcept[i].characOppos);
            }
        };

    }, 10);
}

//delete le charatere opposé s'il est collé a son opposé comme : ()
function deleteAutocomplete(self, actualKey, nextChar, previousChar){
    for(var i = 0; i < character.length; i++){
        //Supprime de egalement le caractere de droite s'il est l'oppose du caractere de gauche
        if(actualKey === 8 && previousChar === character[i].charac && nextChar === character[i].characOppos){
            deleteChar(self);
            return true;
        }
        //Si on ecrit ' () ' et qu'on rajoute ' ) ' permet de ne pas ecrire ca ' ()) '
        if((actualKey === character[i].keyCodeCharacOppos || actualKey === character[i].keyCodeCharacOppos2) && nextChar === character[i].characOppos){
            deleteChar(self);
            return true;
        }
    } 
}