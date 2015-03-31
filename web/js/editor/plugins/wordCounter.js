/**
 * Create by Armya on 28/05/15
 */

define([
	'input'
], function(input){
	var wordCounter = {};

	wordCounter.count = function(){
		var chaine = input.value;
		console.log(chaine);
	    var regex = new RegExp("[a-zA-Z0-9éèêëàáâäóòôöíìîïçÉÈÊËÀÁÂÄÒÓÔÖÌÍÎÏÇ-]+","g");
	    var array = chaine.split(regex);
	    nb = array.length - 1;
	    return nb;
	};

	input.addEventListener('keydown', function(){
		//console.log("Nombre de mot(s) : " + wordCounter.count());
	}) 
});