function dashMod(self, actualKey, selection, previousChar){
    setTimeout(function(){
    var previousChar = (self.value.substring(self.selectionStart - 1, self.selectionStart));
    var previousChar2 = (self.value.substring(self.selectionStart - 2, self.selectionStart - 1));

    console.log(previousChar)
    console.log(previousChar2)

        var nextChar =(self.value.substring(self.selectionStart, self.selectionStart + 1));
        var beforeSelection = self.value.substring(0, self.selectionStart);
        var afterSelection = self.value.substring(self.selectionEnd);
        if(previousChar === '-' && actualKey === 8){
            dashMode = false;
            self.setSelectionRange(beforeSelection.length - 1, beforeSelection.length - 1 + selection.length);
            deleteChar(self);
            console.log(dashMode);
            return 0;
        }

        if(previousChar === '-' && previousChar2 === ' '){
            dashMode = true;
            return 0;
        }
        if(previousChar2.charCodeAt(0) === 10 && previousChar === '-' && actualKey === 54){
            dashMode = true;
            self.setSelectionRange(beforeSelection.length - 1, beforeSelection.length - 1 + selection.length);
            deleteChar(self);
            insertChar(self, ' - ', selection, '');
            return 0;
        }


        if((previousChar2.charCodeAt(0) === 10 && previousChar.charCodeAt(0) === 10) || (previousChar2.charCodeAt(0) === 10 && previousChar !== ' ')){
            dashMode = false;
        }

        if(dashMode === true && previousChar.charCodeAt(0) === 10 && actualKey !== 8){
            insertChar(self, ' - ', selection, '');
        }

        if(previousChar.charCodeAt(0) === 10 && previousChar2 === ' ' && dashMode === true){
            dashMode = false;
            self.setSelectionRange(beforeSelection.length - 4, beforeSelection.length - 4 + selection.length);
            for(var i = 0; i < 7; i++){
                deleteChar(self);
            }
            return 0;
        }
    }, 10);
}