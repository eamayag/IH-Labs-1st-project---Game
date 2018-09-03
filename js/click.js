$(document).ready(function(){ 

  $("#ball").click(function(){
   $(this).remove();
   newBubbles();
  })

  var coloursBall = ["red", "green", "blue"];

  function newBubbles() {
    $("#game").append("<div>Hello</div>");
    $("div").addClass("ball");
    $("div").addClass("new-pos");
    var randomWidth = Math.floor(Math.random() * (1000));
    console.log(randomWidth);
    var randomHeight = Math.floor(Math.random() * (1000));
    console.log(randomHeight);
    var randomColor = coloursBall[Math.floor(Math.random() * coloursBall.length)];
    console.log(randomColor);

    $(".ball").css({"margin-left": randomWidth});
    $(".ball").css({"margin-top": randomHeight});
    $(".ball").css({"background-color": randomColor});

  }

})

