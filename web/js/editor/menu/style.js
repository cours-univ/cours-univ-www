// Regler la largeur des circle_on_off pour qu'ils soient carrés (rond avec les angles arrondis)
var height = $('#menu .button .circle_on_off').height();
$('#menu .button .circle_on_off').css({ 'width' : height + 'px' } );


// Translation pour que que le cercle ne sorte pas du bouton lorsque celui-ci est activé
$("	<style type='text/css'>\
		#menu .button.on .circle_on_off\
		{\
			-webkit-transform: translate(-" + height + "px, 0);\
			-moz-transform: translate(-" + height + "px, 0);\
			-ie-transform: translate(-" + height + "px, 0);\
			-o-transform: translate(-" + height + "px, 0);\
			transform: translate(-" + height + "px, 0);\
		}\
	</style>")
.appendTo("head");