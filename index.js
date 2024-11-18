var  userClickedPattern=[];
var gamePattern=[];
var buttonColours=["red","blue","green","yellow"];
var started=false;
var level=0;

$(document).keypress(function(){
   
   if (!started){
      $("#level-title").text("level  "+level);
   nextSequence();
   started=true;
}
   
});
$(".btn").click(function(){
   var userChosenColour=$(this).attr("id");
   userClickedPattern.push(userChosenColour);
   playsound(userChosenColour);
   animatePress(userChosenColour);
   checkAnswer(userClickedPattern.length-1);


});

 
function checkAnswer(currentlevel){
   if (userClickedPattern[currentlevel]===gamePattern[currentlevel]){
      console.log("right");
   
   if(userClickedPattern.length===gamePattern.length){
   setTimeout(function(){
      nextSequence();
       },1000);
      }  
      
      } else{
         console.log("wrong");
         playsound("wrong");
         $("body").addClass("game-over");
         setTimeout(function () {
           $("body").removeClass("game-over");
         }, 200);
 
         $("#level-title").text("Game Over, Press Any Key to Restart");
         startover();
       }
   
        
   
   }
   
function nextSequence(){
   userClickedPattern=[];
   level++;
   $("#level-title").text("level  "+level)
   var randomNumber=Math.floor(Math.random()*4);
var randomChosenColour=buttonColours[randomNumber];
gamepattern.push(randomChosenColour);
$("#"+randomChosenColour).fadeIn(100).fadeout(100).fadeIn(100);
playsound(randomChosenColour);

}

function playsound(name){
 var sound=new Audio("./sounds/"+name+".mp3");
   sound.play();
}
function animatePress(currentColour){
 $("#"+currentColour).addClass("pressed");
 setTimeout(function(){
$("#"+currentColour).removeClass("pressed")
 },100);
}

function startover(){
level=0;
gamePattern=[];
started=false;
}