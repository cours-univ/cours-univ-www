/**
 * Created by palra on 27/03/15.
 */
define([
  'app',
  'character',
  'characterExcept',
  'menu/buttons/autocomplete',
  'plugins/deleteChar',
  'plugins/insertChar'
], function(app, character, characterExcept, button, deleteChar, insertChar) {

  var autoComplete = {};


  //setTimeout obligatoire
  //Gere l'autocompletition quand on insere un caractère contenu dans var character
  autoComplete.autoComplete = function(self, actualKey, selection){
    setTimeout(function(){
      var previousChar = (self.value.substring(self.selectionStart - 1, self.selectionStart));
      var nextChar =(self.value.substring(self.selectionStart, self.selectionStart + 1));
      var evenInsert = false;
      //Dans tout les cas avec les caractere de var character
      var charLength = character.length;
      for(var i = 0; i < charLength; i++){
        if(previousChar === character[i].charac && actualKey == character[i].keyCodeCharac){
          insertChar.insertBoth(self, '', selection, character[i].characOppos);
          evenInsert = true;
          break;
        }
      }
      //Que dans le cas d'une selection avec les caractere de var charaterExcept
      for (var i = 0; i < characterExcept.length; i++) {
        if(!evenInsert && (selection.length > 0) && previousChar === characterExcept[i].charac && actualKey == characterExcept[i].keyCodeCharac){
          insertChar.insertBoth(self, '', selection, characterExcept[i].characOppos);
        }
      }
    }, 10);
  };

  //delete le charatere opposé s'il est collé a son opposé comme : ()
  autoComplete.deleteAutoComplete = function(self, actualKey, nextChar, previousChar){
    for(var i = 0; i < character.length; i++){
      //Supprime de egalement le caractere de droite s'il est l'oppose du caractere de gauche
      if(actualKey === 8 && previousChar === character[i].charac && nextChar === character[i].characOppos){
        console.log('delete normal');
        deleteChar.deleteRight(self);
        return true;
      }
      //Si on ecrit ' () ' et qu'on rajoute ' ) ' permet de ne pas ecrire ca ' ()) '
      if((actualKey === character[i].keyCodeCharacOppos || actualKey === character[i].keyCodeCharacOppos2) && nextChar === character[i].characOppos){
        console.log('delete droite');
        deleteChar.deleteRight(self);
        return true;
      }
    }
  }

  app.input.addEventListener('keydown', function(e) {
    var actualKey = (e || window.event).which; //code clavier de la touche appuyé

    //tout les caracteres selectionnés
    var selection = this.value.substring(this.selectionStart, this.selectionEnd);

    //caractere avant et apres le curseur
    var previousChar = this.value.substring((this.selectionStart-1), this.selectionStart);
    var nextChar = this.value.substring(this.selectionStart, (this.selectionStart+1));
    console.log('autocomplete');
    if(button.active && !autoComplete.deleteAutoComplete(this, actualKey, nextChar, previousChar)){
      autoComplete.autoComplete(this, actualKey, selection);
    }
  });

  return autoComplete;
});
