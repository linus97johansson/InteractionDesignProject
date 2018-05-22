$("#education").focusin(function(){

    $("#selection").css("height","700px");
});


$("#education").blur(function () {
    console.log("loss of focus");
    $("#selection").css("height","0px");

});

$("#e_learning").click(function(){

    alert("*Goes To nex stage*")

});

