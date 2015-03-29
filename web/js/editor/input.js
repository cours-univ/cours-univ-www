define([
  'text!raccourcis.md'
],function(raccourcis) {
  var input = document.getElementById('input');

  if(localStorage.getItem("input") !== "" || localStorage.getItem("input") !== null){
    input.value = localStorage.getItem("input");
  }
  else{
    input.value = raccourcis;
  }

  return input;
});