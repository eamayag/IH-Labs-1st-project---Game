$(document).ready(function() {

  let counter = 0; //for scoring
  let timeoutID = null; //time for clicking or you lose 
  let lost = false; //for gameOver function

  
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
    
    counter++ //number of clicks, for scoring
    console.log(counter)
    var score = document.getElementById("counter");
    score.innerHTML = "Your score: " + counter; 
  }

  function gameOver() {
    //to call if time is out
    lost = true;
    alert("You lost!");
  }

  $("#game").on("click", ".ball", function() {
    //click a bubble call to end previous bubble and timer
    if (!lost) {
      console.log("Ball");
      clearTimeout(timeoutID);
      newBubbles();
    }
  });
  
  $("#easy").click(function() {
    $("#level").empty();
    $("#level").append("<div>Ok, little baby, just try to pick a bubble a time...</div>");
    $("#start").empty();
    $("#start").append("<button id='easyGame'>Let's blaster!</button>");
  });

  $("#start").on("click", "#easyGame", function() {
    //Start button calls a new bubble and scoring
    $(".ball").remove();
    $("#game").append("<div class='ball'></div>");
    lost = false;
    console.log("Start");
    counter = 0;
    newBubbles();
  });

  $("#medium").click(function() {
    $("#level").empty();
    $("#level").append("<div>Ok, let's try harder, be faster!!!</div>");
    $("#start").empty();
    $("#start").append("<button id='mediumGame'>Let's blaster!</button>");
  });

  $("#hard").click(function() {
    $("#level").empty();
    $("#level").append("<div>Pray for your soul</div>");
    $("#start").empty();
    $("#start").append("<button id='hardGame'>Let's blaster!</button>");
  });



});