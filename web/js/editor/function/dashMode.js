function dashMod(self, actualKey, selection, previousChar){
    setTimeout(function(){

        var previousChar = (self.value.substring(self.selectionStart - 1, self.selectionStart));
        var previousChar2 = (self.value.substring(self.selectionStart - 2, self.selectionStart - 1));
        var previousChar3 = (self.value.substring(self.selectionStart - 3, self.selectionStart - 2));

        var nextChar =(self.value.substring(self.selectionStart, self.selectionStart + 1));
        var beforeSelection = self.value.substring(0, self.selectionStart);
        var afterSelection = self.value.substring(self.selectionEnd);

        //Si on efface un '-' desactive le dashmod
        if(previousChar === '-' && actualKey === 8){
            dashMode = false;
            self.setSelectionRange(beforeSelection.length - 1, beforeSelection.length - 1 + selection.length);
            deleteChar(self);
            return 0;
        }
        // si on fait ' -' active le dashmod
        if(previousChar === '-' && previousChar2 === ' '){
            dashMode = true;
            return 0;
        }
        //si on fait entré (le caractere d'avant est un entré) et qu'on place un tiret, active le dashmod
        if(previousChar2.charCodeAt(0) === 10 && previousChar === '-' && (actualKey === 54 || actualKey === 109)){
            dashMode = true;
            self.setSelectionRange(beforeSelection.length - 1, beforeSelection.length - 1 + selection.length); //recule de 1 la position du curseur
            deleteChar(self);
            insertChar(self, ' - ', selection, '');
            return 0;
        }
        //Si on fait deux fois entré ou entre apres un espace, desactive le dashmod
        // IMPORTANT : est normalement devenu obsolete
        if((previousChar2.charCodeAt(0) === 10 && previousChar.charCodeAt(0) === 10) || (previousChar2.charCodeAt(0) === 10 && previousChar !== ' ')){
            dashMode = false;
            return 0;
        }
        //Si le dahsmod === true et que le caractere precedent est entre et qu'on efface pas, ajoute un tiret
        // IMPORTANT : Permet aussi au if suivant de fonctionner!
        if(dashMode === true && previousChar.charCodeAt(0) === 10 && actualKey !== 8){
            insertChar(self, ' - ', selection, '');
            
        }
        //Si le dahsmod === true que le caractere precedent est ' <entrée>' 
        //passe en dahsmod === false et supprime les caracter inserer ' - <entrée> - ' pour donner '<entrée><entrée>'
        if(previousChar.charCodeAt(0) === 10 && previousChar2 === ' ' && previousChar3 === '-' && dashMode === true){
            dashMode = false;
            self.setSelectionRange(beforeSelection.length - 4, beforeSelection.length - 4 + selection.length);
            for(var i = 0; i < 7; i++){
                deleteChar(self);
            }
            insertChar(self, String.fromCharCode(10), selection, '');
            return 0;
        }
    }, 10);
}