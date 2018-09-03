$(document).ready(function(){ 

  $("#ball").click(function(){
   $(this).remove();
   newBubbles();
  })

  function newBubbles() {
    $("#game").append("<div>Hello</div>");
    $("div").addClass("ball");
  }


})

