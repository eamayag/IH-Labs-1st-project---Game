let timeoutID = null;
let lost = false;

var coloursBall = ["red", "green", "blue", "pink", "yellow"];

function newBubbles() {
  //generates new bubble with random properties and set timer
  var randomWidth = Math.floor(Math.random() * (1024 - $(".ball").width())); //max width on css 1024px
  console.log(randomWidth);
  var randomHeight = Math.floor(Math.random() * (960 - $(".ball").height())); //max heigth on css 960px
  console.log(randomHeight);
  var randomColor = coloursBall[Math.floor(Math.random() * coloursBall.length)];
  console.log(randomColor);

  $(".ball").css({ "margin-left": randomWidth });
  $(".ball").css({ "margin-top": randomHeight });
  $(".ball").css({ "background-color": randomColor });

  timeoutID = setTimeout(function() {
    gameOver();
  }, 2000); //timer to click the bubble
}

function gameOver() {
  //to call if time is out
  lost = true;
  console.log("You lost!");
}

$(document).ready(function() {
  $("#start").click(function() {
    //Start button calls a new bubble and scoring
    $(".ball").remove();
    $("#game").append("<div class='ball'>Click me!</div>");
    lost = false;
    console.log("Start");
    newBubbles();
  });

  $("#game").on("click", ".ball", function() {
    //click a bubble call to end previous bubble and timer
    if (!lost) {
      console.log("Ball");
      clearTimeout(timeoutID);
      newBubbles();
    }
  });
});