<?php 
require '../vendor/autoload.php';

if($_SERVER['REQUEST_METHOD'] === 'POST') {
  if(isset($_POST['markup'])) {
    $source = $_POST['markup'];

    $parser = new \CoursUniv\Markdown\CoursUnivMarkdown();
    $config = HTMLPurifier_Config::createDefault();
    $purifier = new HTMLPurifier($config);

    echo $purifier->purify($parser->parse($source));
  } else {
    http_response_code(404);
  }
} else { ?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Editeur</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/highlight.js/8.4/styles/github.min.css">

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.2/normalize.min.css">

        <link rel="stylesheet" type="text/css" href="css/markdown.css?debug=test">
        <link rel="stylesheet" type="text/css" href="css/theme.css?debug=test">
        <link rel="stylesheet" type="text/css" href="css/editor.css?debug=test">


        <script src="https://cdn.jsdelivr.net/highlight.js/8.4/highlight.min.js"></script>
        <script>hljs.initHighlightingOnLoad();</script>

        <script type="text/x-mathjax-config">
        MathJax.Hub.Config({
        tex2jax: {inlineMath: [['\\(','\\)']]}
        });
        </script>
        <script type="text/javascript"
        src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
        </script>

        <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.3.js"></script>
        <script type="text/javascript" src="/js/src/parallax.js"></script>
    </head>

    <body>
        <div class="container">
            <form id="composer" method="POST">
                <textarea id="input" type="text" name="markup" onkeydown="change()" ></textarea>
            </form>
        <div id="result"></div>
        </div>

        <script type="text/javascript">

        var input = document.getElementById('input');
        var result = document.getElementById('result');
        var timer = null;

        function resetTimer(){
            clearTimeout(timer);
        }

        function change(e) {
            resetTimer();
            timer = setTimeout(function(){
                console.log(input.value);
                // result.innerHTML =input.innerHTML;
                appelAjax();
            }, 500);
        }

        function appelAjax(){
            $.post( "editor.php", {
                markup: $('#input').val()
            },function( data ) {
                $( "#result" ).html(data);
                $('pre code').each(function(i, block){
                    hljs.highlightBlock(block);
                })
            });
        }

        </script>

    </body>
</html>
<?php } ?>