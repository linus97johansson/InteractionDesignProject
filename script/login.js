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
			var next = this.parentNode.nextElementSibling.disabled = false;
			var next = this.parentNode.nextElementSibling.classList.add('current');
			var next = this.parentNode.classList.remove('current');
			var form = this.parentNode.parentNode.style.transform =  'translateX(-100%)'; //transform: translateX(-100%);
			
		});
		$('#singupform').submit(function(e) {
			e.preventDefault();
			var form = this.style.transform =  'translateX(-200%)'; //transform: translateX(-100%);
			var temp = this;
			var user = {
				'firstName': temp.firstname.value,
				'lastName': temp.lastname.value,
				'profession': temp.ocupation.value,
				'speciality': temp.spec.value,
				'username': temp.username.value,
				'password': temp.password.value,
				'country': temp.contry.value,
			}
			
			$.ajax({
				url: './script/users.json',
				type: 'get',
				dataType: 'json',
			})
			.done(function(data) {
				console.log("success");
				if(checkUser(user, data)){
					var form = temp.style.transform =  'translateX(-300%)'; //transform: translateX(-100%);
					
				}else{
					debugger
					var form = temp.style.transform =  'translateX(-100%)'; //transform: translateX(-100%);
					
				}
				
				//all ok? move forward
			})
			.fail(function() {
				console.log("error");
				var form = temp.style.transform =  'translateX(-100%)'; //transform: translateX(-100%);
				//move back
			})
			.always(function() {
				console.log("complete");
			});
			
			
		});
		$('#openModal').click(function(e) {
			e.preventDefault();
			$('#modal-container').addClass('open')
		});
		$("#yes").click(function (e) {
			e.preventDefault();
			$('#modal-container').removeClass('open');
		})
		$("#no").click(function (e) {
			e.preventDefault();
			$('#modal-container').removeClass('open');
		})
		$("#costum").click(function (e) {
			e.preventDefault();
			$('#modal-container').removeClass('open');
		})
		$(".close-modal").click(function (e) {
			e.preventDefault();
			$('#modal-container').removeClass('open');
		})
		$("#modal-container").click(function (e) {
			e.preventDefault();
			$('#modal-container').removeClass('open');
		})
		$("#modal").click(function (e) {
			e.stopPropagation();
		});
		



	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
	function checkUser(user, data) {
				/*'firstName': temp.firstname.value,
				'lastName': temp.lastname.value,
				'profession': temp.ocupation.value,
				'speciality': temp.spec.value,
				'username': temp.username.value,
				'password': temp.password.value,
				'country': temp.contry.value,*/
		for (var i = 0; i < data.length; i++) {
			var now = data[i];
			if (data[i].firstName == user.firstName){
				if (data[i].lastName == user.lastName){
					if (data[i].lastName == user.lastName){
						if (data[i].profession == user.profession){
							if (data[i].speciality == user.speciality){
								if (data[i].country == user.country){
									//All is ok
									return true
								}
							}
						}
					}
				}
			}
		}
	}
	return false
		
	
});