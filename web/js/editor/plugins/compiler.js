define([
  'app',
  'jquery'
], function(app, $) {
  var input = app.input;
  var output = app.output;

  var compiler = {};

  input.addEventListener("keydown", function() {
    clearTimeout(compiler.timer);
    compiler.timer = setTimeout(compiler.handle, 500);
  });

  /**
   * Handles the compilation from the input, to the output
   */
  compiler.handle = function () {
    localStorage.setItem("input", input.value);
    compiler.compile(input.value, output);
  };

  /**
   * Delay after user input, for reloading the markdown
   * @type {number}
   */
  compiler.delay = 500;

  /**
   * @private
   */
  compiler.timer = null;

  /**
   * Compile le `markup` et place le markdown compilé dans
   * `resElem`
   *
   * @param {string} markup
   * @param {HTMLElement} resElem
   **/
  compiler.compile = function (markup, resElem) {
    $.post("/editor", {
      markup: markup
    }, function (data) {
      $(resElem).html(data);
      $('pre code').each(function (i, block) {
        hljs.highlightBlock(block);
      })
    });
  };

  return compiler;
});