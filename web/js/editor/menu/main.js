define([
  'jquery',
  'height',
  'menu/buttons/autocomplete',
  'menu/buttons/raccourcis',
  'menu/buttons/tabulation',
  'loadMarkdown'
], function($, updateHeight) {
  // Regler la largeur des circle_on_off pour qu'ils soient carrés (rond avec les angles arrondis)
  var height = $('#menu > .button .circle_on_off').height();
  $('#menu .button .circle_on_off').css({ 'width' : height + 'px' } );

  // Au redimentionnement de la fenetre
  $( window ).resize(function()
  {
    updateHeight();
  })

// Au clic sur la fleche
  $('#menu .hide_buton').click(function()
  {
    // On cache toutes les dropdown
    $("#menu .dropdown").removeClass("open");

    // Si le menu est déjà caché
    if ($('#menu').hasClass("hidden"))
    {
      // Afficher le menu
      $('#menu').removeClass("hidden");
      // Changer le sens de la fleche
      $(this).removeClass("down");
      $(this).addClass("up");
    }

    // Si le menu n'est pas chaché
    else
    {
      // Cacher le menu
      $('#menu').addClass("hidden");
      // Changer le sens de la fleche
      $(this).removeClass("up");
      $(this).addClass("down");
    }

    updateHeight();
  });

  // Au clic sur un dropdown
  $("#menu .dropdown").mouseenter(function()
  {
    $(this).addClass("open");
  });

  $("#menu .dropdown").mouseleave(function()
  {
    $(this).removeClass("open");
  });

  $("#menu .dropdown > .button").click(function()
  {
    if ($(this).parent().hasClass("open"))
      $(this).parent().removeClass("open");
    else
      $(this).parent().addClass("open");
  });
})