
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
			contry = $('select[name="contry"]')[0];
			user.country = contry;
			this.parentNode.parentNode.className  = "";
			this.parentNode.parentNode.classList.add(contry.value)

			
		});
		$('#singupform').submit(function(e) {
			e.preventDefault();
			var form = this.style.transform =  'translateX(-400%)'; //transform: translateX(-100%);
			var temp = this;
			user.firstName = temp.firstname;
			user.lastName = temp.lastname;
			user.profession = temp.ocupation;
			user.speciality = temp.spec;
			user.username = temp.username;
			user.password = temp.password;
			
			$.ajax({
				url: './script/users.json',
				type: 'get',
				dataType: 'json',
			})
			.done(function(data) {
				console.log("success");
				if(checkUser(user, data)){
					var form = temp.style.transform =  'translateX(-500%)'; //transform: translateX(-100%);

					$('#openModal').text(user.firstName.value);					
					$('#login').text('');			
					logedIn = true;		
					
				}else{
					var form = temp.style.transform =  'translateX(-100%)'; //transform: translateX(-100%);
					$(".error").on('input', function(event) {
						this.classList.remove('error')
						$(this).off()
						/* Act on the event */
					});
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
		$("#yes, #no, #costum, .close-modal, #modal-container").click(function (e) {
			e.preventDefault();
			$('#modal-container').addClass('closing')
			var transEnd = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd";
			$('#modal-container #modal').one(transEnd, function(e) {
				e.preventDefault();

				/* Act on the event */
				$('#modal-container').removeClass('open');
				$('#modal-container').removeClass('closing');
				$('#modal-container').classList = "";
			});
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
				/*
				'firstName': temp.firstname.value,
				'lastName': temp.lastname.value,
				'profession': temp.ocupation.value,
				'speciality': temp.spec.value,
				'country': temp.contry.value,
				(('username': temp.username.value,))
				(('password': temp.password.value,))
				*/
			var FailedElem = [];
		for (var i = 0; i < data.length; i++) {
			var now = data[i];
			var fails = 0;
			FailedElem = [];
			if (data[i].firstName !== user.firstName.value){
				fails++
				FailedElem.push(user.firstName) 
			}
			if (data[i].lastName !== user.lastName.value){
				fails++
				FailedElem.push(user.lastName) 
			}
			
			if (data[i].profession !== user.profession.value){
				fails++
				FailedElem.push(user.profession) 
			}
			if (data[i].speciality !== user.speciality.value){
				fails++
				FailedElem.push(user.speciality) 
			}
			if (data[i].country !== user.country.value){
				fails++
				FailedElem.push(user.country) 
			}
			if (user.username.value == "" || user.username.value == null || user.username.value == undefined || !isEmail(user.username.value) ){
				fails++
				FailedElem.push(user.username) 
			}
			if (user.password.value == "" || user.password.value == null || user.password.value == undefined || user.password.value.length < 7 ){
				fails++
				FailedElem.push(user.password) 
			}				
			if(fails == 0){
				return true
		
			}
			if (fails <= 5  &&  fails == 0) {
				
				break;
			}
				
		}

				for (var i = 0; i < FailedElem.length; i++) {
					FailedElem[i].parentNode.classList.add('error')
					//FailedElem[i].nextElementSibling.innetText
					
					
				}
				return false
	}
		
	function isEmail(email) {
	  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  return regex.test(email);
	}
});