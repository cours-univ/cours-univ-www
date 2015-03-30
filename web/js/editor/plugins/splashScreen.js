define([
	'jquery'
], function($){

$(function(){ // Dès que la page est chargée
	setTimeout(function() // On attend deux secondes pour être sûr que le perser markdown à fini
	{
		$("#splashscreen").hide(); // On cache le splashscreen
	}, 2000);
});

})

