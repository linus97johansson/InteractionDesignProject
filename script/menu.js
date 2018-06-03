$("#expand").focusin(function(){

    $("#selection").addClass("expanded");
    console.log("plx expand");
});

$("#education").blur(function () {
    $("#selection").removeClass("expanded");

});

$("#hamburger").click(function(){

    $("#darkener").addClass("show");
    $("#ham_menu").addClass("show");

});


//This hides the menu when you click on the dark section.
//the .transition class is used to create a smooth transition

$("#darkener").click(function(){
    $("#darkener").removeClass("show");
    $("#ham_menu").removeClass("show");
    $("#darkener").addClass("transition");
    $("#ham_menu").addClass("transition");
    setTimeout(function(){
        $("#darkener").removeClass("transition");
        $("#ham_menu").removeClass("transition"); }, 1000);

});

$("#e_learning").click(function(e){
    if(!logedIn){
        e.preventDefault();
        alert("go to next if signed in!");
    }

});

