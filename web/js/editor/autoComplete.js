function insertChar(self, charOppos, selection){
    var beforeSelection = self.value.substring(0, self.selectionStart);
    var afterSelection = self.value.substring(self.selectionEnd);
    var myString = beforeSelection + selection + charOppos + afterSelection;
    self.value = myString;
    self.setSelectionRange((beforeSelection.length), (beforeSelection.length + selection.length));
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
//Gere l'autocompletition quand on insere un caractère contenu dans var charater
function autocomplete(self, actualKey, selection){
    setTimeout(function(){
        previousChar = (self.value.substring((self.selectionStart-1), self.selectionStart));

        for(var i = 0; i < character.length; i++){
            if(previousChar === character[i].charac && actualKey == character[i].keyCodeCharac){
                insertChar(self, character[i].characOppos, selection);
                break;
            }
        }

    }, 10);
}

//delete le charatere opposé s'il est collé a son opposé comme : ()
function deleteAutocomplete(self, actualKey, nextChar, previousChar){
    if(actualKey === 8){
        for(var i = 0; i < character.length; i++){
            if(previousChar === character[i].charac && nextChar === character[i].characOppos){
                deleteChar(self);
                break
            }
        }        
    }
}