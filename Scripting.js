"use strict";
window.sessionStorage;

var kickOffLocation;
var activityOneLocation;
var activityTwoLocation;
var PuzzleOneLocation;
var PuzzleTwoLocation;
var PuzzleThreeLocation;
var PuzzleFourLocation; 
var PuzzleFiveLocation;
var PuzzleSixLocation;
var ActivityThreeLocation;
var PuzzleSevenLocation;
var PuzzleEightLocation;

// START SCRIPTING FOR KICKOFF

function kickOffFormChanged() {
    sessionStorage.setItem("kickOffLocation", document.getElementById("kickOffLocation").value);
    kickOffLocation = sessionStorage.getItem("kickOffLocation");
}

// END SCRIPTING FOR KICKOFF

// START SCRIPTING FOR ACTIVITY ONE PAGE

function ActivityOneLocationChanged(){
    sessionStorage.setItem("activityOneLocation", document.getElementById("ActivityOneLocation").value);
    activityOneLocation = sessionStorage.getItem("activityOneLocation");
}


// END SCRIPTING FOR ACTIVITY ONE PAGE

// START SCRIPTING FOR ACTIVITY TWO PAGE

function ActivityTwoLocationChanged(){
    sessionStorage.setItem("ActivityTwoLocation", document.getElementById("ActivityTwoLocation").value);
    activityTwoLocation = sessionStorage.getItem("activityTwoLocation");
}


// END SCRIPTING FOR ACTIVITY TWO PAGE

// START SCRIPTING FOR ACTIVITY THREE PAGE

function ActivityThreeLocationChanged(){
    sessionStorage.setItem("ActivityThreeLocation", document.getElementById("ActivityThreeLocation").value);
    ActivityThreeLocation = sessionStorage.getItem("ActivityThreeLocation");
}


// END SCRIPTING FOR ACTIVITY THREE PAGE

// START SCRIPTING FOR PUZZLE ONE

function PuzzleOneLocationChanged(){
    sessionStorage.setItem("PuzzleOneLocation", document.getElementById("PuzzleOneLocation").value);
    PuzzleOneLocation = sessionStorage.getItem("PuzzleOneLocation");
}


// END SCRIPTING FOR PUZZLE ONE

// START SCRIPTING FOR PUZZLE TWO

function PuzzleTwoLocationChanged(){
    sessionStorage.setItem("PuzzleTwoLocation", document.getElementById("PuzzleTwoLocation").value);
    PuzzleTwoLocation = sessionStorage.getItem("PuzzleTwoLocation");
}


// END SCRIPTING FOR PUZZLE TWO

// START SCRIPTING FOR PUZZLE THREE

function PuzzleThreeLocationChanged(){
    sessionStorage.setItem("PuzzleThreeLocation", document.getElementById("PuzzleThreeLocation").value);
    PuzzleThreeLocation = sessionStorage.getItem("PuzzleThreeLocation");
}


// END SCRIPTING FOR PUZZLE THREE

// START SCRIPTING FOR PUZZLE FOUR

function PuzzleFourLocationChanged(){
    sessionStorage.setItem("PuzzleFourLocation", document.getElementById("PuzzleFourLocation").value);
    PuzzleFourLocation = sessionStorage.getItem("PuzzleFourLocation");
}


// END SCRIPTING FOR PUZZLE FOUR

// START SCRIPTING FOR PUZZLE FIVE

function PuzzleFiveLocationChanged(){
    sessionStorage.setItem("PuzzleFiveLocation", document.getElementById("PuzzleFiveLocation").value);
    PuzzleFiveLocation = sessionStorage.getItem("PuzzleFiveLocation");
}


// END SCRIPTING FOR PUZZLE FIVE

// START SCRIPTING FOR PUZZLE SIX

function PuzzleSixLocationChanged(){
    sessionStorage.setItem("PuzzleSixLocation", document.getElementById("PuzzleSixLocation").value);
    PuzzleSixLocation = sessionStorage.getItem("PuzzleSixLocation");
}


// END SCRIPTING FOR PUZZLE SIX

// START SCRIPTING FOR PUZZLE SEVEN

function PuzzleSevenLocationChanged(){
    sessionStorage.setItem("PuzzleSevenLocation", document.getElementById("PuzzleSevenLocation").value);
    PuzzleSevenLocation = sessionStorage.getItem("PuzzleSevenLocation");
}


// END SCRIPTING FOR PUZZLE SEVEN

// START SCRIPTING FOR PUZZLE EIGHT

function PuzzleEightLocationChanged(){
    sessionStorage.setItem("PuzzleEightLocation", document.getElementById("PuzzleEightLocation").value);
    PuzzleEightLocation = sessionStorage.getItem("PuzzleEightLocation");
}


// END SCRIPTING FOR PUZZLE EIGHT

// START SCRIPTING FOR CONGRATULATIONS PAGE
function setDefaultCongraulationsBoxes(){
    kickOffLocation = sessionStorage.getItem("kickOffLocation");
    activityOneLocation = sessionStorage.getItem("activityOneLocation");
    activityTwoLocation = sessionStorage.getItem("activityTwoLocation");
    PuzzleOneLocation = sessionStorage.getItem("PuzzleOneLocation");
    PuzzleTwoLocation = sessionStorage.getItem("PuzzleTwoLocation");
    PuzzleThreeLocation = sessionStorage.getItem("PuzzleThreeLocation");
    PuzzleFourLocation = sessionStorage.getItem("PuzzleFourLocation");
    PuzzleFiveLocation = sessionStorage.getItem("PuzzleFiveLocation");
    PuzzleSixLocation = sessionStorage.getItem("PuzzleSixLocation");
    ActivityThreeLocation = sessionStorage.getItem("ActivityThreeLocation");
    PuzzleSevenLocation = sessionStorage.getItem("PuzzleSevenLocation");
    PuzzleEightLocation = sessionStorage.getItem("PuzzleEightLocation");

    document.getElementById("CongratskickOffLocation").defaultValue = kickOffLocation;
    document.getElementById("CongratsActivityOneLocation").defaultValue = activityOneLocation;
    document.getElementById("CongratsActivityTwoLocation").defaultValue = activityTwoLocation;
    document.getElementById("CongratsPuzzleOneLocation").defaultValue = PuzzleOneLocation;
    document.getElementById("CongratsPuzzleTwoLocation").defaultValue = PuzzleTwoLocation;
    document.getElementById("CongratsPuzzleThreeLocation").defaultValue = PuzzleThreeLocation;
    document.getElementById("CongratsPuzzleFourLocation").defaultValue = PuzzleFourLocation;
    document.getElementById("CongratsPuzzleFiveLocation").defaultValue = PuzzleFiveLocation;
    document.getElementById("CongratsPuzzleSixLocation").defaultValue = PuzzleSixLocation;
    document.getElementById("CongratsActivityThreeLocation").defaultValue = ActivityThreeLocation;
    document.getElementById("CongratsPuzzleSevenLocation").defaultValue = PuzzleSevenLocation;
    document.getElementById("CongratsPuzzleEightLocation").defaultValue = PuzzleEightLocation;
}
// END SCRIPTING FOR CONGRATULATIONS PAGE

