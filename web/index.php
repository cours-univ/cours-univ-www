<!DOCTYPE html>
<?php require '../vendor/autoload.php'; ?>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Cours</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/highlight.js/8.4/styles/github.min.css">
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
  
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.2/normalize.min.css">

  <link rel="stylesheet" type="text/css" href="css/markdown.css?debug=test">
  <link rel="stylesheet" type="text/css" href="css/theme.css?debug=test">
  
</head>
<body>
  <div class="container">
    <?php
      $source = dirname(__FILE__) . '/sources/test.md';

      $parser = new \cebe\markdown\GithubMarkdown();
      $parser->html5 = true;

      echo $parser->parse(file_get_contents($source));
    ?>
  </div>
</body>
</html>