/**
 * Created by palra on 27/03/15.
 */
define([
  'app',
  'plugins/insertChar',
  'plugins/deleteChar',
  'menu/buttons/autocomplete'
], function(app, insertChar, deleteChar, button) {
  var dashMode = {};



  dashMode.handle = function(self, actualKey, selection, previousChar) {
    setTimeout(function(){
      var previousChar = (self.value.substring(self.selectionStart - 1, self.selectionStart));
      var previousChar2 = (self.value.substring(self.selectionStart - 2, self.selectionStart - 1));
      var previousChar3 = (self.value.substring(self.selectionStart - 3, self.selectionStart - 2));

      var nextChar =(self.value.substring(self.selectionStart, self.selectionStart + 1));
      var beforeSelection = self.value.substring(0, self.selectionStart);
      var afterSelection = self.value.substring(self.selectionEnd);

      //si on fait entré (le caractere d'avant est un entré) et qu'on place un tiret, active le dashmod
      if(previousChar2 === '\n' && previousChar === '-' && (actualKey === 54 || actualKey === 109)){
        self.setSelectionRange(beforeSelection.length - 1, beforeSelection.length - 1 + selection.length); //recule de 1 la position du curseur
        deleteChar.deleteRight(self);
        insertChar.insertBoth(self, ' - ', selection, '');
        return 0;
      }

      console.log(actualKey);
      var beforeSelection2 = self.value.substring(0, self.selectionStart-1);
      if(actualKey === 13 && beforeSelection2.substring(beforeSelection2.lastIndexOf("\n") + 1, beforeSelection2.lastIndexOf("\n") + 4) === ' - '){

      console.log(actualKey);
        insertChar.insertBoth(self, ' - ', selection, '');
      }

      if(previousChar.charCodeAt(0) === 10 && previousChar2 === ' ' && previousChar3 === '-'){
        self.setSelectionRange(beforeSelection.length - 4, beforeSelection.length - 4 + selection.length);
        for(var i = 0; i < 7; i++){
          deleteChar.deleteRight(self);
        }
        insertChar.insertBoth(self, "\n", selection, '');
        return 0;
      }
    }, 10);

  };

  app.input.addEventListener('keydown', function(e) {
    var actualKey = (e || window.event).which; //code clavier de la touche appuyé

    //tout les caracteres selectionnés

    var selection = this.value.substring(this.selectionStart, this.selectionEnd);
    console.log('DashFunction');
    //caractere avant et apres le curseur
    var previousChar = this.value.substring((this.selectionStart-1), this.selectionStart);
    var nextChar = this.value.substring(this.selectionStart, (this.selectionStart+1));

    dashMode.handle(this, actualKey, selection, previousChar);
  });

  return dashMode;
})
