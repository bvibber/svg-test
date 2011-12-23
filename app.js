var queue = queue;

function loadImage(filename) {
	var deferred = new $.Deferred();
	$('#img')
		.width('320')
		.attr('src', filename)
		.one('load', function() {
			deferred.resolve();
		})
	return deferred.promise();
}

function log(text) {
	$('<li>').text(text).appendTo('#log');
}

function runTest(filename) {
	return loadImage(filename).then(function() {
		log(filename);
	});
}

function runTests() {
	var deferred = new $.Deferred();
	var runNext = function() {
		if (queue.length > 0) {
			var filename = queue.pop();
			runTest(filename).then(runNext);
		} else {
			deferred.resolve();
		}
	}
	runNext();
	return deferred.promise();
}

function init(initialQueue) {
	queue = initialQueue;
	runTests().then(function() {
		log('done!');
	});
}
