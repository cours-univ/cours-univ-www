<!DOCTYPE html>
<?php require '../vendor/autoload.php'; ?>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Cours</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/highlight.js/8.4/styles/github.min.css">
  
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.2/normalize.min.css">

  <link rel="stylesheet" type="text/css" href="css/markdown.css?debug=test">
  <link rel="stylesheet" type="text/css" href="css/theme.css?debug=test">
  
</head>
<body>
  <div class="container">
    <?php
      $source = dirname(__FILE__) . '/sources/test.md';

      $parser = new \CoursUniv\Markdown\CoursUnivMarkdown();
      echo $parser->parse(file_get_contents($source));
    ?>
  </div>


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
</body>
</html>