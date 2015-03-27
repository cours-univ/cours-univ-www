/**
 * Created by palra on 27/03/15.
 */
/**
 * Created by palra on 27/03/15.
 */
define([
  'app',
  'plugins/autoComplete',
  'menu/buttons/autocomplete'
], function(app, autoComplete, button) {

  var codeQuote = {};

  codeQuote.addCodeQuote = function (self, actualKey, e, selection, previousChar){
    var altKey = (e || window.event).altKey;
    var ctrlKey = (e || window.event).ctrlKey;

    // ctrl + alt + c
    if(actualKey === 67 && altKey && ctrlKey && previousChar !== '`'){
      e.preventDefault();

      var enterString = String.fromCharCode(13);
      var beforeSelection = self.value.substring(0, self.selectionStart);
      var afterSelection = self.value.substring(self.selectionEnd);
      var bonus = '';


      var addRight = enterString + '```';

      if(beforeSelection.length > 0){
        var addLeft = enterString + enterString + '```';
        if(selection.length > 0){
          var bonus = enterString;
        }
      }
      else{
        addLeft = '```';
      }
      self.value = beforeSelection + addLeft + bonus + selection + addRight+ afterSelection;
      self.setSelectionRange(beforeSelection.length + addLeft.length, beforeSelection.length + addLeft.length);
    }
    else if(actualKey === 67 && altKey && !ctrlKey && previousChar !== '`'){
      e.preventDefault();

      autoComplete.insertChar(self, '`', selection, '`');
    }
  };


  app.input.addEventListener('keydown', function(e) {
    var actualKey = (e || window.event).which; //code clavier de la touche appuyé

    //tout les caracteres selectionnés

    var selection = this.value.substring(this.selectionStart, this.selectionEnd);

    //caractere avant et apres le curseur
    var previousChar = this.value.substring((this.selectionStart-1), this.selectionStart);
    var nextChar = this.value.substring(this.selectionStart, (this.selectionStart+1));

    if(button.active && !autoComplete.deleteAutoComplete(this, actualKey, nextChar, previousChar)){
     codeQuote.addCodeQuote(this, actualKey, e, selection, previousChar);
    }
  });

  return codeQuote;
});
