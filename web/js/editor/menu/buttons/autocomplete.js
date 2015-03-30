/**
 * Created by palra on 27/03/15.
 */
define(function() {
  var autocompleteButton = document.getElementById("autocomplete");
  autocompleteButton.addEventListener('click', function(){
    if(this.classList.contains("off")){
      this.classList.remove("off");
      this.classList.add("on");
      autocompleteButton.active = true;
      localStorage.setItem("settings.autocomplete", "true");
    }
    else{
      this.classList.remove("on");
      this.classList.add("off");
      autocompleteButton.active = false;
      localStorage.setItem("settings.autocomplete", "false");
    }
  });

  if(localStorage.getItem("settings.autocomplete") == "true") {
    autocompleteButton.classList.remove("off");
    autocompleteButton.classList.add("on");
    autocompleteButton.active = true;
  }

  return autocompleteButton;
});