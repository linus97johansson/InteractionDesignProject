$(document).ready(function ($) {
    $.getScript('script/menu.js', function() {

        console.log("success");

<<<<<<< HEAD
    });
=======


	$.getScript( "script/login.js", function( data, textStatus, jqxhr ) {
	  console.log( data ); // Data returned
	  console.log( textStatus ); // Success
	  console.log( jqxhr.status ); // 200
	  console.log( "Load was performed." );
	});
>>>>>>> e4a3371eb4923e75fa47445aa714f152f0dde5e1
});