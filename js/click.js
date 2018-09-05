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

  $("#game").on("click", ".ball", function() { //click a bubble call to end previous bubble and timer
    if (!lost) {
      console.log("Ball");
      clearTimeout(timeoutID);
      bubbles(level);
    } 
  });

  //LOGIC FOR CREATING NEW BUBBLES EACH CLICK
  function bubbles(level) { //generates new bubble with random properties and set timer
    var randomWidth = Math.floor(Math.random() * (1024 - $(".ball").width())); //max width on css 1024px
    console.log(randomWidth);
    var randomHeight = Math.floor(Math.random() * (960 - $(".ball").height())); //max heigth on css 960px
    console.log(randomHeight);
    var coloursBall = ["red", "green", "blue", "pink", "yellow"]; 
    var randomColor = coloursBall[Math.floor(Math.random() * coloursBall.length)];
    console.log(randomColor);

    $(".ball").css({ "margin-left": randomWidth });
    $(".ball").css({ "margin-top": randomHeight });
    $(".ball").css({ "background-color": randomColor });

    switch (level) { //setting timer to click the bubble according to difficulty of game
      case "easy":
        timeoutID = setTimeout(function() {
        gameOver();
        }, 2000); 
        break;
      case "medium":
        timeoutID = setTimeout(function() {
        gameOver();
        }, 1000); 
        break;
      case "hard":
        timeoutID = setTimeout(function() {
        gameOver();
        }, 500); 
      break;
      case "hardcore":
        timeoutID = setTimeout(function() {
        gameOver();
        }, 500); 
      default:
    }
   
    counter++ //number of clicks, for scoring
    console.log(counter)
    var score = document.getElementById("counter");
    score.innerHTML = "Your score: " + counter; 
  }

  //LOGIC FOR EASY LEVEL
  $("#easy").click(function() {
    $("#level").empty();
    $("#level").append("<div>Ok, little baby, just try to click every bubble. If you're too slow, you'll lost!... Easy peasy!</div>");
    $("#start").empty();
    $("#start").append("<button id='easyGame'>Let's blaster!</button>");
  });

  $("#start").on("click", "#easyGame", function() { //Start button calls a new bubble and scoring
    $(".ball").remove();
    $("#game").append("<div class='ball'></div>");
    lost = false;
    console.log("Start");
    counter = 0;
    level = "easy";
    bubbles(level);

    // var timer = document.getElementById("timer");
    // setInterval((timer.innerHTML= "Remaining time: " + ),100);
    // score.innerHTML = "Your score: " + counter; 

  });

  //LOGIC FOR MEDIUM LEVEL
  $("#medium").click(function() {
    $("#level").empty();
    $("#level").append("<div>Ok, let's try harder, just be faster, click on every ball before the timer ends or you'll lost!!!</div>");
    $("#start").empty();
    $("#start").append("<button id='mediumGame'>Let's blaster!</button>");
  });

  $("#start").on("click", "#mediumGame", function() { //Start button calls a new bubble and scoring
    $(".ball").remove();
    $("#game").append("<div class='ball'></div>");
    lost = false;
    console.log("Start");
    counter = 0;
    level = "medium";
    bubbles(level);
  });  

  //LOGIC FOR HARD LEVEL
  $("#hard").click(function() {
    $("#level").empty();
    $("#level").append("<div>Steady hands? Do you really think you're fast? Get ready to run!!</div>");
    $("#start").empty();
    $("#start").append("<button id='hardGame'>Let's blaster!</button>");
  });

  $("#start").on("click", "#hardGame", function() {
    //Start button calls a new bubble and scoring
    $(".ball").remove();
    $("#game").append("<div class='ball'></div>");
    lost = false;
    console.log("Start");
    counter = 0;
    level = "hard";
    bubbles(level);
  });

//LOGIC FOR HARDCORE LEVEL  
  $("#hardcore").click(function() {
    $("#level").empty();
    $("#level").append("<div>HOW YOU DARE! PRAY FOR YOUR SOUL</div>");
    $("#start").empty();
    $("#start").append("<button id='hardcoreGame'>Let's blaster!</button>");
  });

  $("#start").on("click", "#hardcoreGame", function() {
    //Start button calls a new bubble and scoring
    $(".ball").remove();
    $("#game").append("<div class='ball'></div>");
    lost = false;
    console.log("Start");
    counter = 0;
    level = "hardcore"
    bubbles(level);
  });

  // function makeNewPosition(){ //moving ball for hardcore level
  //     var h = $(window).height() - 50;
  //     var w = $(window).width() - 50;
    
  //     var nh = Math.floor(Math.random() * h);
  //     var nw = Math.floor(Math.random() * w);
    
  //     return [nh,nw];      
  //   }
  
  //   function movingDiv(element){
  //     var newq = makeNewPosition();
  //     $(element).animate({ 
  //       top: newq[0], left: newq[1] }, 1000, function(){
  //       movingDiv(element);        
  //       });
  //   };
  
  // $("#start").on("click", "#hardGame", function() {
  //   //Start button calls a new bubble and scoring
  //   $(".ball").remove();
  //   $("#game").append("<div class='ball'></div>");
  //   lost = false;
  //   console.log("Start");
  //   counter = 0;
  //   newBubbles();
  //   movingDiv();
  // });

});