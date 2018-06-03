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
		var user = {
				'firstName': "",
				'lastName': "",
				'profession': "",
				'speciality': "",
				'username': "",
				'password': "",
				'country': "",
			}

		$('#ContryDone').click(function(e) {
			e.preventDefault()
			var next = this.parentNode.nextElementSibling.disabled = false;
			var next = this.parentNode.nextElementSibling.classList.add('current');
			var next = this.parentNode.classList.remove('current');
			var form = this.parentNode.parentNode.style.transform =  'translateX(-100%)'; //transform: translateX(-100%);
			contry = $('select[name="contry"]')[0].value;
			user.country = contry;
			this.parentNode.parentNode.className  = "";
			this.parentNode.parentNode.classList.add(contry)

			
		});
		$('#singupform').submit(function(e) {
			e.preventDefault();
			var form = this.style.transform =  'translateX(-400%)'; //transform: translateX(-100%);
			var temp = this;
			user.firstName = temp.firstname.value,
			user.lastName = temp.lastname.value,
			user.profession = temp.ocupation.value,
			user.speciality = temp.spec.value,
			user.username = temp.username.value,
			user.password = temp.password.value,
			
			
			$.ajax({
				url: './script/users.json',
				type: 'get',
				dataType: 'json',
			})
			.done(function(data) {
				console.log("success");
				if(checkUser(user, data)){
					var form = temp.style.transform =  'translateX(-500%)'; //transform: translateX(-100%);
					
				}else{
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
		$(".step2 .back").click(function(e) {
			e.preventDefault();
			this.parentNode.parentNode.style.transform = "translateX(0%)"
			this.parentNode.classList.remove("current");
			$(".step1").addClass('current')
		});
		$(".step3 .back").click(function(e) {
			e.preventDefault();
			this.parentNode.parentNode.style.transform = "translateX(-100%)"
		});
		$(".step4 .back").click(function(e) {
			e.preventDefault();
			this.parentNode.parentNode.style.transform = "translateX(-100%)"
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