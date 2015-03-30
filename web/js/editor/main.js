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
  'plugins/splashScreen',
  'menu/main'
], function(app, compiler, $) {
  compiler.handle();
});