/**
 * Created by palra on 27/03/15.
 */
define([
  'input',
  'raccourcis',
  'plugins/compiler',
  'jquery'
], function(input, raccourcis, compiler, $) {
  var raccourcisButton = document.getElementById("raccourcis");
  raccourcisButton.onclick = function(){
    if(input.value != "" && input.value != raccourcis){
      if(confirm("Attention, cela va remplacer le texte présent dans l'éditeur, continuer?")){
        input.value = raccourcis;
        compiler.handle();
      }
    }
    else{
      input.value = raccourcis;
      compiler.handle();
    }
  };

  return raccourcisButton;
});
