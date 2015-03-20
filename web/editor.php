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
        <link rel="stylesheet" type="text/css" href="css/editor.css?debug=test">


        <script src="https://cdn.jsdelivr.net/highlight.js/8.4/highlight.min.js"></script>
        <script>hljs.initHighlightingOnLoad();</script>

        <script type="text/x-mathjax-config">
        MathJax.Hub.Config({
        tex2jax: {inlineMath: [['\\(','\\)']]}
        });
        </script>
        <script type="text/MathJaxvascript"
        src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
        </script>

        <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.3.js"></script>
    </head>

    <body>
        <div class="container">
            
            <form id="composer" method="POST">
            
                <textarea class="tabDisable" id="input" type="text" name="markup" onkeydown="change()" style="font-family: Consolas ;color: #5a5a5a; font-size: 18px;"></textarea>

            </form>
            
            <div id="result"></div>
        </div>

        <script type="text/javascript">

        var input = document.getElementById('input');
        input.focus();
        var result = document.getElementById('result');
        var timer = null;
        var lastKey;
        var buffer;
        var previousChar;

        var character = [
        {
        	charac : '(',
        	characOppos : ')',
			keyCodeCharac : 53,
			exept : false
        },
        {
        	charac : '{',
        	characOppos : '}',
			keyCodeCharac : 52,
			exept : false
        },
        {
        	charac : '[',
        	characOppos : ']',
			keyCodeCharac : 53,
			exept : false
        },
        {
        	charac : '"',
        	characOppos : '"',
			keyCodeCharac : 51,
			exept : false
        },
        {
        	charac : '*',
        	characOppos : '*',
			keyCodeCharac : 220,
			exept : true
        },
        {
        	charac : "'",
        	characOppos : "'",
			keyCodeCharac : 52,
			exept : false
        },
        ]




        $('.tabDisable').on('keydown', function(e)
		{
			var actualKey = (e || window.event).keyCode;

	        function insert(charNm, self, charOppos){
				var beforeSelection = self.value.substring(0, self.selectionStart-1);
			    var afterSelection = self.value.substring(self.selectionEnd);
			    var myString = beforeSelection + charNm + selection + charOppos + afterSelection;
			    self.value = myString;
			    self.setSelectionRange((beforeSelection.length + 1), (beforeSelection.length + selection.length + 1));
			}

			function delet(self){
					var beforeSelection = self.value.substring(0, self.selectionStart);
	                var selection = self.value.substring(self.selectionStart+1, self.selectionEnd+1);
	                var afterSelection = self.value.substring(self.selectionEnd+1);
	                self.value = beforeSelection + selection + afterSelection;
	                self.setSelectionRange(beforeSelection.length, beforeSelection.length + selection.length);
			}
			var selection = this.value.substring(this.selectionStart, this.selectionEnd);

			//setTimeout obligatoire
			//Gere l'autocompletition quand on insere un caractère contenu dans var charater
			setTimeout(function(){
				previousChar = (this.value.substring((this.selectionStart-1), this.selectionStart));

				for(var i = 0; i < character.length; i++){
					if(previousChar === character[i].charac && actualKey == character[i].keyCodeCharac && character[i].exept === false){
						insert(character[i].charac, this, character[i].characOppos);
						break;
					}
				}

			}.bind(this), 10);

			//caractere avant et apres le curseur
			var nextChar = this.value.substring(this.selectionStart, (this.selectionStart+1));
			previousChar = this.value.substring((this.selectionStart-1), this.selectionStart);

			//delete le charatere opposé s'il est collé a son opposé comme : ()
            for(var i = 0; i < character.length; i++){
            	if(actualKey === 8 && previousChar === character[i].charac && nextChar === character[i].characOppos){
            		delet(this);
            		break
            	}
            }

            //Gere la tabulation
            if (actualKey == 9 && lastKey !== 16)
            {
                e.preventDefault();
                var tabString = String.fromCharCode(9);

                var beforeSelection = this.value.substring(0, this.selectionStart);
                var afterSelection = this.value.substring(this.selectionEnd);
                this.value = beforeSelection + tabString + selection + afterSelection;
                this.setSelectionRange((beforeSelection.length) + tabString.length, beforeSelection.length + tabString.length + selection.length);

                this.focus();
            }

            //Gere le shift + tabulation
            if (actualKey == 9 && lastKey === 16)
            {
                e.preventDefault();
                var modified = false;
                //Cas de la tabulation derriere le curseur
               	if(previousChar === '	'){
                    var beforeSelection = this.value.substring(0, this.selectionStart-1);
                    var afterSelection = this.value.substring(this.selectionEnd);
                    this.value = beforeSelection + selection + afterSelection;
                    this.setSelectionRange(beforeSelection.length, beforeSelection.length + selection.length);
                    modified = true;
                }
                //cas de la tabluation devant le curseur
               	else if(nextChar === '	'){
                    var beforeSelection = this.value.substring(0, this.selectionStart);
                    var selection = this.value.substring(this.selectionStart+1, this.selectionEnd+1);
                    var afterSelection = this.value.substring(this.selectionEnd+1);
                    this.value = beforeSelection + selection + afterSelection;
                    this.setSelectionRange(beforeSelection.length, beforeSelection.length + selection.length);
                    modified = true;
                }
                this.focus();
            }

            //permet de garde le shift + tabulation si on est fait plusieur
            buffer = lastKey;
            lastKey = actualKey;
            if (actualKey == 9 && buffer === 16 && modified === true)
            {
                lastKey = 16;
            }
		});

        function resetTimer(){
            clearTimeout(timer);
        }

        function change(e) {
            resetTimer();
            timer = setTimeout(function(){
                appelAjax();
            }, 500);
            input.focus();
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