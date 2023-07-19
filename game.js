var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = []
var gamePattern = [];
var userClickedPattern = [];

function playSound(color){
    var buttonSound = new Audio("sounds/"+color+".mp3");
    buttonSound.play();
}

function nextSequence(){
    var randomNumber = Math.floor(Math.random() *4);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);


    $("#"+color).addClass("pressed");
    setTimeout(function() {
        $("#"+color).removeClass("pressed");
    }, 100 );

    playSound(randomChosenColour);
   
}

$(".btn").click(function(event) {
    var userChosenColour = $(this).attr('id');  
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
});