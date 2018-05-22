console.log("focused");
$("#education").after($list);


    $eLearning.focus(function(){

        alert("clicked");

    })


});

$("#education>*").blur(function () {
    console.log("loss of focus");
  $("#menu").remove();

});

