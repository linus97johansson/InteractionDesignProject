$(document).ready(function(){
// Open the modal by adding class to <body> and use CSS- to change things when body has that class
	$("a.open-modal").on("click", function(e) {
		e.preventDefault();
		


		$("body").addClass("modal-showing");
	})

	
	// CLOSE modal by removing the class from <body>
	// 1. click on the cancel-button
	// 2. click on the modal container
	$(".modal-container .button.cancel").on("click", function(e) {
		e.preventDefault();

		$("body").addClass("closing");

		var transEnd = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd";
		$(".modal-container .modal").one(transEnd, function() {

			$("body").removeClass("modal-showing closing");
			$(this).off(transEnd);
		});
	})
})

