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

            if(beforeSelection.length > 0){
                var lastIndex = beforeSelection.lastIndexOf(String.fromCharCode(10));
                var before = beforeSelection.substring(0, lastIndex+1);
                var after = beforeSelection.substring(lastIndex+1);
                beforeSelection = before + String.fromCharCode(9) + after;
            }
        }
        else{
            self.value = beforeSelection + tabString + selection + afterSelection;
            self.setSelectionRange((beforeSelection.length + tabString.length), beforeSelection.length +  tabString.length + selection.length);
            return 0;
        }

        self.value = beforeSelection + selection + afterSelection;
        self.setSelectionRange((beforeSelection.length), beforeSelection.length + selection.length);
        
        self.focus();
        return true;
    }
}

function deleteFirstFindTabOnLine(selection){
    if(selection.length > 0){
        for(var i = 0; i < selection.length; i++){
            if(selection.charAt(i) === String.fromCharCode(10) || selection.charAt(i) === String.fromCharCode(13)){
                if(selection.charAt(i+1) === String.fromCharCode(9)){
                    var before = selection.substring(0, i+1);
                    var after = selection.substring(i+2);
                    selection = before + after;
                }
                if(selection.charAt(i+1) === ' ' && selection.charAt(i+2) === ' ' && selection.charAt(i+3) === ' ' && selection.charAt(i+4) === ' '){
                    var before = selection.substring(0, i+1);
                    var after = selection.substring(i+5);
                    selection = before + after;
                }
            }
        }
    }
    return selection;
}

function deleteTabLastIndex(selection){
    if(selection.length > 0){
        var lastIndex = selection.lastIndexOf(String.fromCharCode(10));

        if(selection.charAt(lastIndex + 1) === String.fromCharCode(9)){
            var before = selection.substring(0, lastIndex + 1);
            var after = selection.substring(lastIndex + 2);
            selection = before + after;
        }
        else if(selection.charAt(lastIndex + 1) === ' ' && selection.charAt(lastIndex + 2) === ' ' && selection.charAt(lastIndex + 3) === ' ' && selection.charAt(lastIndex + 4) === ' ' ){
            var before = selection.substring(0, lastIndex + 1);
            var after = selection.substring(lastIndex + 5);
            selection = before + after;
        }
    }
    console.log('ok ok');
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

            selection = deleteFirstFindTabOnLine(selection);

            self.value = beforeSelection + selection + afterSelection;
            self.setSelectionRange(beforeSelection.length, beforeSelection.length + selection.length);
            return 0;
        }

        //cas de la tabluation devant le curseur
        else if(nextChar === String.fromCharCode(9)){
            var beforeSelection = self.value.substring(0, self.selectionStart);

            selection = deleteFirstFindTabOnLine(selection);

            var afterSelection = self.value.substring(self.selectionEnd+1);
            self.value = beforeSelection + selection + afterSelection;
            self.setSelectionRange(beforeSelection.length, beforeSelection.length + selection.length);
            return 0;
        }
        else if(selection.length > 0){
            var beforeSelection = self.value.substring(0, self.selectionStart);
            var afterSelection = self.value.substring(self.selectionEnd);
            beforeSelection = deleteTabLastIndex(beforeSelection);
            selection = deleteFirstFindTabOnLine(selection);

            self.value = beforeSelection + selection + afterSelection;
            self.setSelectionRange(beforeSelection.length, beforeSelection.length + selection.length);
        }
        self.focus();
    }
}