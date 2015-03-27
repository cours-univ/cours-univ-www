/**
 * Created by palra on 27/03/15.
 */

requirejs.config({
    baseUrl: 'js/editor'
});

require([
  'app',
  'plugins/compiler',
  'plugins/autoComplete',
  'plugins/dashMode',
  'plugins/codeQuote',
  'plugins/tabulation',
  'menu/main'
], function(app, compiler) {
  compiler.handle();
});