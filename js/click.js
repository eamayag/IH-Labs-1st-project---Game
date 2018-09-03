$(document).ready(function(){ 

  $("#start").click(function(){
    console.log("Start");  
   newBubbles();
  })

  var coloursBall = ["red", "green", "blue"];

  function newBubbles() {
    $("#game").append("<div>Click me!</div>");
    $("div").addClass("ball");
    var randomWidth = Math.floor(Math.random() * (1024));
    if (randomWidth > 1024 - $(".ball").width) {
      randomWidth /= 2;
    }
    console.log(randomWidth);
    var randomHeight = Math.floor(Math.random() * (960));
    if (randomHeight > 960 - $("ball").height) {
      randomHeight /= 2
    }
    console.log(randomHeight);
    var randomColor = coloursBall[Math.floor(Math.random() * coloursBall.length)];
    console.log(randomColor);

    $(".ball").css({"margin-left": randomWidth});
    $(".ball").css({"margin-top": randomHeight});
    $(".ball").css({"background-color": randomColor});
  }


  $("#game").click(function(){
    console.log("Ball");  
   newBubbles();
  })

})

