define([
  'jquery',
  'menu/buttons/autocomplete',
  'menu/buttons/raccourcis',
  'menu/buttons/tabulation',
  'loadMarkdown'
], function($) {
  // Regler la largeur des circle_on_off pour qu'ils soient carrés (rond avec les angles arrondis)
  var height = $('#menu .button .circle_on_off').height();
  $('#menu .button .circle_on_off').css({ 'width' : height + 'px' } );

// Au clic sur la fleche
  $('#menu .hide_buton').click(function()
  {
    // Si le menu est déjà caché
    if ($('#menu').hasClass("hidden"))
    {
      // Afficher le menu
      $('#menu').removeClass("hidden");
      // Changer le sens de la fleche
      $(this).removeClass("down");
      $(this).addClass("up");

      // Redimentionner et replacer l'input et le result
      $('#input').css({ 'height' : $(window).height() - $('#menu').height() + 'px' });
      $('#input, #result').css({ 'top' : $('#menu').height() + 'px' });
    }

    // Si le menu n'est pas chaché
    else
    {
      // Cacher le menu
      $('#menu').addClass("hidden");
      // Changer le sens de la fleche
      $(this).removeClass("up");
      $(this).addClass("down");

      // Redimentionner et replacer l'input et le result
      $('#input').css({ 'height' : '100%' });
      $('#input, #result').css({ 'top' : '0px' });
    }
  });
})