//Gere la tabulation
function writeTabulation(self, actualKey, e, shiftKey, selection){
    if (actualKey == 9 && !shiftKey){
        e.preventDefault();
        var tabString = String.fromCharCode(9);

        var beforeSelection = self.value.substring(0, self.selectionStart);
        var afterSelection = self.value.substring(self.selectionEnd);
        self.value = beforeSelection + tabString + selection + afterSelection;
        self.setSelectionRange((beforeSelection.length) + tabString.length, beforeSelection.length + tabString.length + selection.length);

        self.focus();
    }
}
//Gere le shift + tabulation
function unWriteTabulation(self, actualKey, e, shiftKey, previousChar, nextChar, selection){
    if(actualKey == 9 && shiftKey){
        e.preventDefault();
        //Cas de la tabulation derriere le curseur
        if(previousChar === String.fromCharCode(9)){
            var beforeSelection = self.value.substring(0, self.selectionStart-1);
            var afterSelection = self.value.substring(self.selectionEnd);
            self.value = beforeSelection + selection + afterSelection;
            self.setSelectionRange(beforeSelection.length, beforeSelection.length + selection.length);
        }
        //cas de la tabluation devant le curseur
        else if(nextChar === String.fromCharCode(9)){
            var beforeSelection = self.value.substring(0, self.selectionStart);
            var selection = self.value.substring(self.selectionStart+1, self.selectionEnd+1);
            var afterSelection = self.value.substring(self.selectionEnd+1);
            self.value = beforeSelection + selection + afterSelection;
            self.setSelectionRange(beforeSelection.length, beforeSelection.length + selection.length);
        }
        self.focus();
    }
}