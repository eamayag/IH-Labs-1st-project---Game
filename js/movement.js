$(document).ready(function(){
  movingDiv('.ball');
 
  function makeNewPosition(){
  // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
  
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
  
    return [nh,nw];      
  }

  function movingDiv(element){
    var newq = makeNewPosition();
    $(element).animate({ 
      top: newq[0], left: newq[1] }, 1000, function(){
      movingDiv(element);        
      });
  };
});