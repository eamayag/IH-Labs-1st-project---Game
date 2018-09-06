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
    alert("You lost!");
  	clearInterval(timeoutID);
  }

  $("#gameZone").on("click", ".ball", function() { //click a bubble calls to end previous bubble and timer
    if (!lost) {
      clearInterval(timeoutID);
      bubbles(level);
    } 
  });

  function printTime(time){
    $("#progressbar").html("Remaining time: " + time);  
  }

  //LOGIC FOR CREATING NEW BUBBLES EACH CLICK
  function bubbles(level) { //generates new bubble with random properties and set timer
    var randomWidth = Math.floor(Math.random() * (1500 - $(".ball").width())); //max width on css 2000px
    var randomHeight = Math.floor(Math.random() * (1500 - $(".ball").height())); //max heigth on css 2000px
    var coloursBall = ["red", "green", "blue", "pink", "yellow"]; 
    var randomColor = coloursBall[Math.floor(Math.random() * coloursBall.length)];

    $(".ball").css({ "margin-left": randomWidth });
    $(".ball").css({ "margin-top": randomHeight });
    $(".ball").css({ "border-color": randomColor });

    switch (level) { //difficulty levels
      case "easy":
        time = 500;
        break;
      case "medium":
        time = 500;
        changingDiv() 
      break;
      case "hard":
        time = 500;
        movingDiv();  
      break;
      case "hardcore":
        time = 500;
        changingDiv() 
        movingDiv(); 
      default:
    }
   
   printTime(time);	
   timeoutID = setInterval(function() {
     time -= 1;
     printTime(time);
     if (time == 0) {
       gameOver();
     }
   }, 1);
   
    counter++ //number of clicks, for scoring
    var score = document.getElementById("counter");
    score.innerHTML = "Your score: " + counter; 
  }

  //LOGIC FOR EASY LEVEL
  $(".easy").click(function() {
    $("#infolevel").empty();
    $("#infolevel").append("<div>Ok, little baby, you have two whole seconds to click every bubble. If you're too slow, you'll lost!... Easy peasy!</div>");
    $("#start").empty();
    $("#start").append("<button class='easy'>Let's blaster!</button>");
  });

  $("#start").on("click", ".easy", function() { //Start button calls a new bubble and scoring
    $(".ball").remove();
    $("#gameZone").append("<div class='ball'></div>");
    lost = false;
    counter = 0;
    level = "easy";
    bubbles(level);
  
  });

  //LOGIC FOR MEDIUM LEVEL
  $(".medium").click(function() {
    $("#infolevel").empty();
    $("#infolevel").append("<div>Let's try harder, just be faster, click on every ball-<i>whatever</i> before the time ends... and you better forget about borders ;)</div>");
    $("#start").empty();
    $("#start").append("<button class='medium'>Let's blaster!</button>");
  });

  $("#start").on("click", ".medium", function() { //Start button calls a new bubble and scoring
    $(".ball").remove();
    $("#gameZone").append("<div class='ball'></div>");
    lost = false;
    counter = 0;
    level = "medium";
    bubbles(level);
  });  

  //LOGIC FOR HARD LEVEL
  $(".hard").click(function() {
    $("#infolevel").empty();
    $("#infolevel").append("<div>Steady hands? Do you really think you're fast? Let's get a little bit messy...</div>");
    $("#start").empty();
    $("#start").append("<button class='hard'>Let's blaster!</button>");
  });
  
  function makeNewPosition(){ //moving ball for hard level
    var h = $("#gameZone").height() - 200;
    var w = $("#gameZone").width() - 200;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return [nh,nw];      
  }

  function changingDiv(){
    var movingBubble = makeNewPosition();
    $(".ball").animate({width: movingBubble[0], height: movingBubble[1] })
  };

  $("#start").on("click", ".hard", function() {
    //Start button calls a new bubble and scoring
    $(".ball").remove();
    $("#gameZone").append("<div class='ball'></div>");
    lost = false;
    counter = 0;
    level = "hard";
    bubbles(level);
  });

//LOGIC FOR HARDCORE LEVEL  
  $(".hardcore").click(function() {
    $("#infolevel").empty();
    $("#infolevel").append("<div>HOW YOU DARE! PRAY FOR YOUR SOUL... well... maybe exagerated... or not ;)</div>");
    $("#start").empty();
    $("#start").append("<button class='hardcore'>Let's blaster!</button>");
  });

  function makeNewPosition(){ //moving ball for hardcore level
    var h = $("#gameZone").height() - 200;
    var w = $("#gameZone").width() - 200;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return [nh,nw];      
  }

  function movingDiv(){
    var movingBubble = makeNewPosition();
    $(".ball").animate({"margin-left": movingBubble[0], "margin-top": movingBubble[1] });
  };
  
    $("#start").on("click", ".hardcore", function() {  //Start button calls a new bubble and scoring
    $(".ball").remove();
    $("#gameZone").append("<div class='ball'></div>");
    lost = false;
    counter = 0;
    level = "hardcore"
    bubbles(level);
  });
  
});