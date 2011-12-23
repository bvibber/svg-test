<?php
header('Content-Type: text/html; charset=utf-8');
function getFiles($dirname) {
	return glob("$dirname/*.svg");
}
$queue = getFiles('queue');
?>
<!doctype html>
<html>
<title>SVG tester</title>
<body>
	<h1>Wikimedia SVG tester</h1>

	<div id="tester">
		<canvas id="canvas"></canvas>
		<img id="img">
	</div>

	<ul id="log"></ul>

	<script src="lib/jquery.js"></script>
	<script src="app.js"></script>
	<script>init(<?php echo json_encode($queue); ?>)</script>
</body>

</html>
