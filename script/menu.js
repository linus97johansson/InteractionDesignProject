
$.ajax({
    url: "html/menu.html",
    dataType: "html"
}).done(function(data) {

   data = "<div>"+data+"</div>";
   $list = $(data).find("#menu");
   console.log($list);

   $eLearning = $(data).find("#e_learning");
   console.log($eLearning);

});

$("#education").focus(function(){

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

