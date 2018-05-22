$(document).ready(function ($) {

	$.ajax({
		url: './html/login.html',
		dataType: 'html',
		
	})
	.done(function(data) {
		console.log("success");
		var elem = document.createElement('div');
		elem.innerHTML = data;
		document.body.append(elem);
		debugger;
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	

});