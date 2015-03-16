<!DOCTYPE html>
<?php require '../vendor/autoload.php'; ?>
<html>
<head>
	<title>Cours</title>
</head>
<body>
	<?php
		$source = dirname(__FILE__) . '/sources/test.md';

		$parser = new \cebe\markdown\Markdown();
		$parser->html5 = true;

		echo $parser->parse(file_get_contents($source));
	?>
</body>
</html>