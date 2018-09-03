$(document).ready(function(){ 

  $("#start").click(function(){ //Start button calls a new bubble and scoring
    console.log("Start");  
    newBubbles();
  })

  var coloursBall = ["red", "green", "blue"];

  function newBubbles() {   //generates new bubble with random properties and set timer
    $("#game").append("<div>Click me!</div>");
    $("div").addClass("ball");
    var randomWidth = Math.floor(Math.random() * (1024)); //max width on css 1024px 
    if (randomWidth > 1024 - $(".ball").width) {
      randomWidth /= 2;
    }
    console.log(randomWidth);
    var randomHeight = Math.floor(Math.random() * (960)); //max heigth on css 960px
    if (randomHeight > 960 - $("ball").height) {
      randomHeight /= 2
    }
    console.log(randomHeight);
    var randomColor = coloursBall[Math.floor(Math.random() * coloursBall.length)];
    console.log(randomColor);

    $(".ball").css({"margin-left": randomWidth});
    $(".ball").css({"margin-top": randomHeight});
    $(".ball").css({"background-color": randomColor});
    
  //  var timeoutID = setTimeout(function(){gameOver()},2000) //timer to click the bubble  
  }

  var click = $("#game").click(function(){ //click a bubble call to end previous bubble and timer
    console.log("Ball");  
    //clearTimeout(timeoutID);
    newBubbles();
  })

  function gameOver() { //to call if time is out
    console.log("hello")
    var gameOver = "You lost!";
    console.log(gameOver);
  }

})


// var click = $("#game").click(function(){ //click a bubble call to end previous bubble and timer
//   console.log("Ball");  
//   var timer = setTimeout(function() { $("#game").click(function(){newBubbles()}); }, 2000);
//   $("#game").click(function(){
//     clearTimeout(timer);
//     gameOver();
// })
// });

