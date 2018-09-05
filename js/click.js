$(document).ready(function() {

  //STARTING VARIABLES TO CREATE THE GAME
  let counter = 0; //for scoring
  let timeoutID = null; //time for clicking or you lose 
  let lost = false; //for gameOver function
  var level = null; //for selecting difficulty 
  

  //LOGIC FOR BEGGINING AND GAME OVER
  function gameOver() {    //to call when timer ends
    lost = true;
    alert("You lost!");
  }

  $("#game").on("click", ".ball", function() { //click a bubble calls to end previous bubble and timer
    if (!lost) {
      clearTimeout(timeoutID);
      bubbles(level);
    } 
  });

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
        timeoutID = setTimeout(function() {
          // setInterval(function() {
          //   document.getElementById("progressbar").style.width = width - 10%; }, 100);
            gameOver();
          }, 2000); 
        break;
      case "medium":
        timeoutID = setTimeout(function() {
        gameOver();
        }, 2000);
        changingDiv() 
      break;
      case "hard":
        timeoutID = setTimeout(function() {
        gameOver();
        }, 2000);
        movingDiv();  
      break;
      case "hardcore":
        timeoutID = setTimeout(function() {
        gameOver();
        }, 2000);
        changingDiv() 
        movingDiv(); 
      default:
    }
   
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
    $("#game").append("<div class='ball'></div>");
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
    $("#game").append("<div class='ball'></div>");
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
  
  function makeNewPosition(){ //moving ball for hardcore level
    var h = $("#game").height() - 100;
    var w = $("#game").width() - 100;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return [nh,nw];      
  }

  function changingDiv(){
    var movingBubble = makeNewPosition();
    $(".ball").animate({width: movingBubble[0], left: movingBubble[1] })
  };

  $("#start").on("click", ".hard", function() {
    //Start button calls a new bubble and scoring
    $(".ball").remove();
    $("#game").append("<div class='ball'></div>");
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
    var h = $("#game").height() - 100;
    var w = $("#game").width() - 100;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return [nh,nw];      
  }

  function movingDiv(){
    var movingBubble = makeNewPosition();
    $(".ball").animate({"margin-left": movingBubble[0], "margin-top": movingBubble[1] })
  };
  
    $("#start").on("click", ".hardcore", function() {  //Start button calls a new bubble and scoring
    $(".ball").remove();
    $("#game").append("<div class='ball'></div>");
    lost = false;
    counter = 0;
    level = "hardcore"
    bubbles(level);
  });
  
});