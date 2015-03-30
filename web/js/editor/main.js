/**
 * Created by palra on 27/03/15.
 */

requirejs.config({
  baseUrl: 'js/editor',
  paths: {
    text: '/components/requirejs-text/text'
  }
});

require([
  'app',
  'plugins/compiler',
  'jquery',
  'plugins/autoComplete',
  'plugins/dashMode',
  'plugins/codeQuote',
  'plugins/tabulation',
  'plugins/wordCounter',
  'menu/main'
], function(app, compiler, $) {
  compiler.handle();

  $(function(){ // Dès que la page est chargée
    setTimeout(function() // On attend deux secondes pour être sûr que le perser markdown à fini
    {
      $("#splashscreen").hide(); // On cache le splashscreen
    }, 2000);
  });
});