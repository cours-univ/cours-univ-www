/**
 * Create by Armya on 28/05/15
 */

define([
	'app'
], function(app){

	var wordCounter = {};

	wordCounter.count = function(){
		var chaine = app.input.value;
		console.log(chaine);
	    var regex = new RegExp("[a-zA-Z0-9éèêëàáâäóòôöíìîïçÉÈÊËÀÁÂÄÒÓÔÖÌÍÎÏÇ-]+","g");
	    array = chaine.split(regex);
	    nb = array.length - 1;
	    return nb;
	};

	app.input.addEventListener('keydown', function(){
		console.log("Nombre de mot(s) : " + wordCounter.count());
	}) 
})