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


		$('#ContryDone').click(function(e) {
			e.preventDefault()
			var next = this.parentNode.nextElementSibling.disabled = false
			var form = this.parentNode.parentNode.style.transform =  'translateX(-100%)'; //transform: translateX(-100%);
			
		});
		$('#singupform').submit(function(e) {
			e.preventDefault();
			var form = this.style.transform =  'translateX(-200%)'; //transform: translateX(-100%);
			
		});
		$('#openModal').click(function(e) {
			e.preventDefault();
			$('#modal-container').addClass('open')
		});




	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	

});