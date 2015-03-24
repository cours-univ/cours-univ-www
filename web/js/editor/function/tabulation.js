//Gere la tabulation
function writeTabulation(self, actualKey, e, shiftKey, selection){
    if (actualKey == 9 && !shiftKey){
        e.preventDefault();
        var tabString = String.fromCharCode(9);

        var beforeSelection = self.value.substring(0, self.selectionStart);
        var afterSelection = self.value.substring(self.selectionEnd);

        if(selection.length > 0){
            for(var i = 0; i < selection.length; i++){
                if(selection.charAt(i) === String.fromCharCode(10)){
                    var before = selection.substring(0, i+1);
                    var after = selection.substring(i+1);
                    selection = before + String.fromCharCode(9) + after;
                    i++;
                }
            }
        }
        self.value = beforeSelection + tabString + selection + afterSelection;
        self.setSelectionRange((beforeSelection.length) + tabString.length, beforeSelection.length + tabString.length + selection.length);
        
        self.focus();
    }
}

function findTabToDelete(selection){
    if(selection.length > 0){
        for(var i = 0; i < selection.length; i++){
            if(selection.charAt(i) === String.fromCharCode(10) && selection.charAt(i+1) === String.fromCharCode(9)){
                var before = selection.substring(0, i+1);
                var after = selection.substring(i+2);
                selection = before + after;
            }
        }
    }
    return selection;
}

//Gere le shift + tabulation
function unWriteTabulation(self, actualKey, e, shiftKey, previousChar, nextChar, selection){
    if(actualKey == 9 && shiftKey){
        e.preventDefault();
        //Cas de la tabulation derriere le curseur
        if(previousChar === String.fromCharCode(9)){
            var beforeSelection = self.value.substring(0, self.selectionStart-1);
            var afterSelection = self.value.substring(self.selectionEnd);

            selection = findTabToDelete(selection);

            self.value = beforeSelection + selection + afterSelection;
            self.setSelectionRange(beforeSelection.length, beforeSelection.length + selection.length);
        }
        //cas de la tabluation devant le curseur
        else if(nextChar === String.fromCharCode(9)){
            var beforeSelection = self.value.substring(0, self.selectionStart);
            var selection = self.value.substring(self.selectionStart+1, self.selectionEnd+1);

            selection = findTabToDelete(selection);

            var afterSelection = self.value.substring(self.selectionEnd+1);
            self.value = beforeSelection + selection + afterSelection;
            self.setSelectionRange(beforeSelection.length, beforeSelection.length + selection.length);
        }
        else{

            console.log('ok');
            var beforeSelection = self.value.substring(0, self.selectionStart);
            var afterSelection = self.value.substring(self.selectionEnd);

            selection = findTabToDelete(selection);

            self.value = beforeSelection + selection + afterSelection;
            self.setSelectionRange(beforeSelection.length, beforeSelection.length + selection.length);
        }
        self.focus();
    }
}