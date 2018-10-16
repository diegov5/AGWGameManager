"use strict";

var kickOffLocation;
var activityOneLocation;
var activityTwoLocation;
var puzzleOneLocation;
var puzzleTwoLocation;
var puzzleThreeLocation;
var puzzleFourLocation; 
var puzzleFiveLocation;
var puzzleSixLocation;
var activityThreeLocation;
var puzzleSevenLocation;
var puzzleEightLocation;

// START SCRIPTING FOR KICKOFF

function kickOffFormChanged() {
    kickOffLocation = document.getElementById("kickOffLocation").value;
    console.log(kickOffLocation);
}

// END SCRIPTING FOR KICKOFF

// START SCRIPTING FOR ACTIVITY ONE PAGE

function ActivityOneLocationChanged(){
    activityOneLocation = document.getElementById("ActivityOneLocation").value;
}


// END SCRIPTING FOR ACTIVITY ONE PAGE

// START SCRIPTING FOR ACTIVITY TWO PAGE

function ActivityTwoLocationChanged(){
    activityTwoLocation = document.getElementById("ActivityTwoLocation").value;
}


// END SCRIPTING FOR ACTIVITY TWO PAGE

// START SCRIPTING FOR ACTIVITY THREE PAGE

function ActivityThreeLocationChanged(){
    activityThree = document.getElementById("ActivityThreeLocation").value;
}


// END SCRIPTING FOR ACTIVITY THREE PAGE

// START SCRIPTING FOR PUZZLE ONE

function PuzzleOneLocationChanged(){
    puzzleOneLocation = document.getElementById("PuzzleOneLocation").value;
}


// END SCRIPTING FOR PUZZLE ONE

// START SCRIPTING FOR PUZZLE TWO

function PuzzleTwoLocationChanged(){
    puzzleTwoLocation = document.getElementById("PuzzleTwoLocation").value;
}


// END SCRIPTING FOR PUZZLE TWO

// START SCRIPTING FOR PUZZLE THREE

function PuzzleThreeLocationChanged(){
    puzzleThreeLocation = document.getElementById("PuzzleThreeLocation").value;
}


// END SCRIPTING FOR PUZZLE THREE

// START SCRIPTING FOR PUZZLE FOUR

function PuzzleFourLocationChanged(){
    puzzleFourLocation = document.getElementById("PuzzleFourLocation").value;
}


// END SCRIPTING FOR PUZZLE FOUR

// START SCRIPTING FOR PUZZLE FIVE

function PuzzleFiveLocationChanged(){
    puzzleFiveLocation = document.getElementById("PuzzleFiveLocation").value;
}


// END SCRIPTING FOR PUZZLE FIVE

// START SCRIPTING FOR PUZZLE SIX

function PuzzleSixLocationChanged(){
    puzzleSixLocation = document.getElementById("PuzzleSixLocation").value;
}


// END SCRIPTING FOR PUZZLE SIX

// START SCRIPTING FOR PUZZLE SEVEN

function PuzzleSevenLocationChanged(){
    puzzleSevenLocation = document.getElementById("PuzzleSevenLocation").value;
}


// END SCRIPTING FOR PUZZLE SEVEN

// START SCRIPTING FOR PUZZLE EIGHT

function PuzzleEightLocationChanged(){
    if (document.getElementById("PuzzleEightLocation").value != null){
        puzzleEightLocation = document.getElementById("PuzzleEightLocation").value;
    }
    else if (document.getElementById("CongratsPuzzleEightLocation").value){
        puzzleEightLocation = document.getElementById("CongratsPuzzleEightLocation").value;
    }
    console.log(puzzleEightLocation);
}


// END SCRIPTING FOR PUZZLE EIGHT

// START SCRIPTING FOR CONGRATULATIONS PAGE

document.getElementById("kickOffLocation").value = kickOffLocation;
document.getElementById("ActivityOneLocation").value = activityOneLocation;
document.getElementById("ActivityTwoLocation").value = activityTwoLocation;
document.getElementById("PuzzleOneLocation").value = puzzleOneLocation;
document.getElementById("PuzzleTwoLocation").value = puzzleTwoLocation;
document.getElementById("PuzzleThreeLocation").value = puzzleThreeLocation;
document.getElementById("PuzzleFourLocation").value = puzzleFourLocation;
document.getElementById("PuzzleFiveLocation").value = puzzleFiveLocation;
document.getElementById("PuzzleSixLocation").value = puzzleSixLocation;
document.getElementById("ActivityThreeLocation").value = activityThreeLocation;
document.getElementById("PuzzleSevenLocation").value = puzzleSevenLocation;
document.getElementById("PuzzleEightLocation").value = puzzleEightLocation;


// END SCRIPTING FOR CONGRATULATIONS PAGE

