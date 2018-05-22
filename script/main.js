$(document).ready(function ($) {
    $.getScript('script/menu.js', function() {

        console.log("success");
    });


	$.getScript( "script/login.js", function( data, textStatus, jqxhr ) {
	  console.log( data ); // Data returned
	  console.log( textStatus ); // Success
	  console.log( jqxhr.status ); // 200
	  console.log( "Load was performed." );
	});
