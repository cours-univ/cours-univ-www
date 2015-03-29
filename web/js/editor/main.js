/**
 * Created by palra on 27/03/15.
 */

requirejs.config({
  baseUrl: 'js/editor',
  paths: {
    text: '/components/requirejs-text/text.js'
  }
});

require([
  'app',
  'plugins/compiler',
  'plugins/autoComplete',
  'plugins/dashMode',
  'plugins/codeQuote',
  'plugins/tabulation',
  'plugins/wordCounter',
  'menu/main'
], function(app, compiler) {
  compiler.handle();
});