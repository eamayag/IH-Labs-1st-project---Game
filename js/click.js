$(document).ready(function() {

  //STARTING VARIABLES TO CREATE THE GAME
  var level = null; //for selecting difficulty 
  var counter = 0; //for scoring
  var time = null; //for remaining time
  var timeoutID = null; //for interval to call gameOver  
  var lost = false; //for gameOver function

  //LOGIC FOR BEGGINING, GAME OVER AND TIMER
  function gameOver() {    //to call when timer ends
    lost = true;
    clearInterval(timeoutID);
    $("#game").append("<div id='gameover'>Poor you... you'll have to be quicker next time! Loser!!! ;)</div>");
  }

  $("body").click(function() { //removing gameover screen after losing 
    $("#gameover").remove();
  });

  $("#gameZone").on("click", ".ball", function() { //clicking a bubble calls to end previous bubble and timer
    if (!lost) {
      clearInterval(timeoutID);
      bubbles(level);
    } 
  })

  function printTime(time){  //timer, called from levels
    $("#progressbar").html("Seconds left: " + time);  
  }

  //SELECTING LEVELS BEFORE STARTING
  $(".easy").click(function() {
    $("#infolevel").empty();
    $("#infolevel").append("<div>Ok, little baby, just try to click every bubble. If you're too slow, you'll lost!... Easy peasy!</div>");
    $("#start").empty();
    $("#start").append("<button class='easy'>Let's blaster!</button>");
  });

  $(".medium").click(function() {
    $("#infolevel").empty();
    $("#infolevel").append("<div>Let's try something messy, click on every bubble-whatever before the time ends... </div>");
    $("#start").empty();
    $("#start").append("<button class='medium'>Let's blaster!</button>");
  });

  $(".hard").click(function() {
    $("#infolevel").empty();
    $("#infolevel").append("<div>Steady hands? Do you really think you're fast? Catch me, if you can...</div>");
    $("#start").empty();
    $("#start").append("<button class='hard'>Let's blaster!</button>");
  });

  $(".hardcore").click(function() {
    $("#infolevel").empty();
    $("#infolevel").append("<div>HOW YOU DARE! PRAY FOR YOUR SOUL... well... maybe exaggerated... get ready for surprises! ;)</div>");
    $("#start").empty();
    $("#start").append("<button class='hardcore'>Let's blaster!</button>");
  });

  //LOGIC FOR CREATING NEW BUBBLES EACH CLICK, INCREMENTING COUNTER - BY LEVEL
  function bubbles(level) { //generates new bubble with random properties, called from every button-start and when clicking a bubble
    var randomWidth = Math.floor(Math.random() * (800 - $(".ball").width())); //max width on css 800px
    var randomHeight = Math.floor(Math.random() * (600 - $(".ball").height())); //max heigth on css 600px
    var coloursBall = ["red", "green", "blue", "pink", "yellow", "grey", "white"]; 
    var randomColor = coloursBall[Math.floor(Math.random() * coloursBall.length)];

    $(".ball").css({ "margin-left": randomWidth }); 
    $(".ball").css({ "margin-top": randomHeight });
    $(".ball").css({ "border-color": randomColor });

    switch (level) { //difficulty levels
      case "easy":
        time = 30;
        break;
      case "medium":
        time = 20;
        changingDiv(); 
      break;
      case "hard":
        time = 20;
        movingDiv();  
      break;
      case "hardcore":
        time = 20;
        changingDiv(); 
        movingDiv(); 
      default:
    }
   
   timeoutID = setInterval(function() { //timer to click every bubble. Timer is cleared when clicking the ball and game over
     time -= 1;
     printTime((time/10).toFixed(1));
     if (time <= 0) {
       gameOver();
      }
   }, 100);

    counter++ //number of clicks, for scoring, setting to 0 when changing level
    var score = document.getElementById("counter");
    score.innerHTML = "Your score: " + counter; 
  }

  function makeNewBubble(option){ //moving or sizing bubble for hard and hardcore levels
    var h = $("#gameZone").height();
	  var w = $("#gameZone").width();
    switch (option) {
      case "moving":
          h -= $(".ball").height();
          w -= $(".ball").width();
  		break;
      case "sizing":
          h -= parseInt($(".ball").css("margin-top"));
          w -= parseInt($(".ball").css("margin-left"));      	  
      break;
      default:
  	}
	  var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
	  return [nh,nw];      
  }
  
  function movingDiv(){ //moving DIV containing bubble for harder levels
    var newBubble = makeNewBubble("moving");
    $(".ball").animate({"margin-top": newBubble[0], "margin-left": newBubble[1] });
  };
  
  function changingDiv(){  //changing bubble for medium and hardcore level
    var newBubble = makeNewBubble("sizing");   
    $(".ball").animate({height: newBubble[0], width: newBubble[1] })
  };

  //WHEN CLICKING A BALL - BY LEVEL
  $("#start").on("click", ".easy", function() { changeLevel("easy")});
  $("#start").on("click", ".medium", function() { changeLevel("medium")});  
  $("#start").on("click", ".hard", function() { changeLevel("hard")});
  $("#start").on("click", ".hardcore", function() { changeLevel("hardcore")});

  function changeLevel(l){
    $(".ball").remove();
    $("#gameZone").append("<div class='ball'></div>");
    lost = false;
    counter = 0;
    level = l;
    bubbles(level);
  }
});