/**
 * Created by palra on 27/03/15.
 */
define([
  'app'
], function(app) {
  var tabulation = {};

  //Gere la tabulation
  tabulation.writeTabulation = function (self, actualKey, e, shiftKey, selection){
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
        return false;
      }

      self.value = beforeSelection + selection + afterSelection;
      self.setSelectionRange((beforeSelection.length), beforeSelection.length + selection.length);

      self.focus();
      return true;
    }
  };

  tabulation.deleteFirstFindTabOnLine = function (selection){
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
  };

  tabulation.deleteTabLastIndex = function (selection){
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
    return selection;
  };

  //Gere le shift + tabulation
  tabulation.unWriteTabulation = function (self, actualKey, e, shiftKey, previousChar, nextChar, selection) {
    if(actualKey == 9 && shiftKey){
      e.preventDefault();
      //Cas de la tabulation derriere le curseur
      if(previousChar === String.fromCharCode(9)){
        var beforeSelection = self.value.substring(0, self.selectionStart-1);
        var afterSelection = self.value.substring(self.selectionEnd);

        selection = tabulation.deleteFirstFindTabOnLine(selection);

        self.value = beforeSelection + selection + afterSelection;
        self.setSelectionRange(beforeSelection.length, beforeSelection.length + selection.length);
        return 0;
      }

      //cas de la tabluation devant le curseur
      else if(nextChar === String.fromCharCode(9)){
        var beforeSelection = self.value.substring(0, self.selectionStart);

        selection = tabulation.deleteFirstFindTabOnLine(selection);

        var afterSelection = self.value.substring(self.selectionEnd+1);
        self.value = beforeSelection + selection + afterSelection;
        self.setSelectionRange(beforeSelection.length, beforeSelection.length + selection.length);
        return 0;
      }
      else if(selection.length > 0){
        var beforeSelection = self.value.substring(0, self.selectionStart);
        var afterSelection = self.value.substring(self.selectionEnd);
        beforeSelection = tabulation.deleteTabLastIndex(beforeSelection);
        selection = tabulation.deleteFirstFindTabOnLine(selection);

        self.value = beforeSelection + selection + afterSelection;
        self.setSelectionRange(beforeSelection.length, beforeSelection.length + selection.length);
      }
      self.focus();
    }
  };


  app.input.addEventListener('keydown', function(e) {
    var actualKey = (e || window.event).which; //code clavier de la touche appuyé
    var shiftKey = (e || window.event).shiftKey; //booleen : true si shift appuyé

    //tout les caracteres selectionnés
    var selection = this.value.substring(this.selectionStart, this.selectionEnd);

    //caractere avant et apres le curseur
    var previousChar = this.value.substring((this.selectionStart-1), this.selectionStart);
    var nextChar = this.value.substring(this.selectionStart, (this.selectionStart+1));

    if(!tabulation.writeTabulation(this, actualKey, e, shiftKey, selection)) {
      tabulation.unWriteTabulation(this, actualKey, e, shiftKey, previousChar, nextChar, selection);
    }
  });

  return tabulation;
});
