var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0 ; 
var start = false
// helper functions for animations and sound
function playSound(color){
    var buttonSound = new Audio("sounds/"+color+".mp3");
    buttonSound.play();
}
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed");
    }, 100 );
}

// function that animates the next key while also adding to the pattern list 
// for the current games session
function nextSequence(){
    var randomNumber = Math.floor(Math.random() *4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    animatePress(randomChosenColour);
    level = level + 1;
    $("#level-title").html("Level " + level);
} 

$(".btn").click(function() {
    var userChosenColour = $(this).attr('id');  
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

// starts the game by detecting use case of when a key is pressed thus starting the game
$(document).keydown(function() {
    if (start == false){
        nextSequence();
        start = true;
    }
})

function checkAnswer(currentLevel){
    
    if(gamePattern[currentLevel] == userClickedPattern[currentLevel]){
        console.log("success");
    }else{
        $("body").addClass("game-over");
        playSound("wrong");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").html("Game Over, Press Any Key to Restart");
        startOver();
        console.log("wrong");
    }

    if (currentLevel + 1 == gamePattern.length){
        console.log("length");
        userClickedPattern = [];
        setTimeout(function(){
            nextSequence();
        }, 1000);
        
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    start = false;
}