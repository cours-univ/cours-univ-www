<!DOCTYPE html>
<?php require '../vendor/autoload.php'; ?>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Cours</title>

  <link rel="stylesheet" href="//cdn.jsdelivr.net/highlight.js/8.4/styles/default.min.css">
  <script src="//cdn.jsdelivr.net/highlight.js/8.4/highlight.min.js"></script>
  <script>hljs.initHighlightingOnLoad();</script>
  <script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {inlineMath: [['\\(','\\)']]}
  });
  </script>
  <script type="text/javascript"
    src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
  </script>


</head>
<body>
  <?php
    $source = dirname(__FILE__) . '/sources/test.md';

    $parser = new \cebe\markdown\GithubMarkdown();
    $parser->html5 = true;

    echo $parser->parse(file_get_contents($source));
  ?>
</body>
</html>