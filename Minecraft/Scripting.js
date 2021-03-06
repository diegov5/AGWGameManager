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
var GameDate;
var GameTime;
var DigitOne;
var DigitTwo;
var DigitThree;
var PuzzleFiveLocationClue;

var ActivityFiveLocation;
var ActivityFourLocation;

//Start send Email
function sendMail(){
    kickOffLocation = sessionStorage.getItem("kickOffLocation");
    activityOneLocation = sessionStorage.getItem("activityOneLocation");
    activityTwoLocation = sessionStorage.getItem("ActivityTwoLocation");
    PuzzleOneLocation = sessionStorage.getItem("PuzzleOneLocation");
    PuzzleTwoLocation = sessionStorage.getItem("PuzzleTwoLocation");
    PuzzleThreeLocation = sessionStorage.getItem("PuzzleThreeLocation");
    PuzzleFourLocation = sessionStorage.getItem("PuzzleFourLocation");
    DigitOne = sessionStorage.getItem("DigitOne");
    DigitTwo = sessionStorage.getItem("DigitTwo");
    DigitThree = sessionStorage.getItem("DigitThree");
    PuzzleFiveLocation = sessionStorage.getItem("PuzzleFiveLocation");
    PuzzleSixLocation = sessionStorage.getItem("PuzzleSixLocation");
    ActivityThreeLocation = sessionStorage.getItem("ActivityThreeLocation");
    PuzzleSevenLocation = sessionStorage.getItem("PuzzleSevenLocation");
    PuzzleEightLocation = sessionStorage.getItem("PuzzleEightLocation");

    ActivityFiveLocation = sessionStorage.getItem("ActivityFiveLocation");
    ActivityFourLocation = sessionStorage.getItem("ActivityFourLocation");

    var emailTo = "ThomasMcDonald1998@Gmail.com";
    var emailCC = "Diegov0824@hotmail.com";
    var emailSub = "Adventure Game Works: Clues and Hints";
    var emailBody = "Clues:";
    location.href = "mailto:"+emailTo+'?cc='+emailCC+'&subject='+emailSub+'&body='+emailBody;
}
// START SCRIPTING FOR KICKOFF

function kickOffFormChanged() {
    sessionStorage.setItem("kickOffLocation", document.getElementById("kickOffLocation").value);
    kickOffLocation = sessionStorage.getItem("kickOffLocation");
}

function setDefaultKickoff(){
    kickOffLocation = sessionStorage.getItem("kickOffLocation");
    if (kickOffLocation != null) {
        document.getElementById("kickOffLocation").defaultValue = kickOffLocation;
    }
}

// END SCRIPTING FOR KICKOFF

// START SCRIPTING FOR GAME DATE/TIME

function gameDateFormChanged() {
    sessionStorage.setItem("GameDate", document.getElementById("Date").value);
    GameDate = sessionStorage.getItem("GameDate");
}

function gameTimeFormChanged() {
    sessionStorage.setItem("GameTime", document.getElementById("Time").value);
    GameTime = sessionStorage.getItem("GameTime");
}

function setDefaultDateAndTime(){
    GameDate = sessionStorage.getItem("GameDate");
    if (GameDate != null) {
        document.getElementById("Date").defaultValue = GameDate;
    }
    GameTime = sessionStorage.getItem("GameTime");
    if (GameTime != null) {
        document.getElementById("Time").defaultValue = GameTime;
    }
}
function setDefaultValues(){
    GameDate = sessionStorage.getItem("GameDate");
    GameTime = sessionStorage.getItem("GameTime");
    if (GameDate != null) {
        document.getElementById("sDate").innerHTML = formatDate(GameDate);
    }
    if (GameTime != null) {
        document.getElementById("sTime").innerHTML = GameTime;

        //var setup = TimeObject.stepDown(120);
        var time = convertTime(120);
        document.getElementById("time0").innerHTML = time[0] + ":" + time[1];
        var time = convertTime(110);
        document.getElementById("time1").innerHTML = time[0] + ":" + time[1];
        var time = convertTime(100);
        document.getElementById("time2").innerHTML = time[0] + ":" + time[1];
        var time = convertTime(70);
        document.getElementById("time3").innerHTML = time[0] + ":" + time[1];
        var time = convertTime(60);
        document.getElementById("time4").innerHTML = time[0] + ":" + time[1];
        var time = convertTime(50);
        document.getElementById("time5").innerHTML = time[0] + ":" + time[1];
        var time = convertTime(30);
        document.getElementById("time6").innerHTML = time[0] + ":" + time[1];
        document.getElementById("time7").innerHTML = GameTime;
    }
}
//subtracts time from start time (in mins)
function convertTime(mins){
    var hours_i = parseInt(GameTime.substring(0, 2));
    var mins_i = parseInt(GameTime.substring(3));
    var hours = Math.floor(mins / 60);
    mins = mins - hours * 60;
    mins_i = mins_i - mins;
    if( mins_i < 0)
    {
        hours++;
        mins_i = 60 + mins_i
    }
    hours_i = hours_i - hours;
    if(hours_i <= 0)
        hours_i = 12 + hours_i;
    var h = "0" + hours_i;
    var m = "0" + mins_i;
    return [h.substring(h.length-2), m.substring(m.length-2)];
}
function formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var monthIndex = parseInt(date.substring(5,7));
    var  day = date.substring(8);
    var year = date.substring(0,4);
  
    return monthNames[monthIndex-1] + ' ' + day + ', ' + year;
  }

// END SCRIPTING FOR GAME DATE/TIME

// START SCRIPTING FOR ACTIVITY ONE PAGE

function ActivityOneLocationChanged(){
    sessionStorage.setItem("activityOneLocation", document.getElementById("ActivityOneLocation").value);
    activityOneLocation = sessionStorage.getItem("activityOneLocation");
}

function setDefaultActivityOne(){
    activityOneLocation = sessionStorage.getItem("activityOneLocation");
    if (activityOneLocation != null) {
        document.getElementById("ActivityOneLocation").defaultValue = activityOneLocation;
    }
}

// END SCRIPTING FOR ACTIVITY ONE PAGE

// START SCRIPTING FOR ACTIVITY TWO PAGE

function ActivityTwoLocationChanged(){
    sessionStorage.setItem("ActivityTwoLocation", document.getElementById("ActivityTwoLocation").value);
    activityTwoLocation = sessionStorage.getItem("activityTwoLocation");
}

function setDefaultActivityTwo(){
    activityTwoLocation = sessionStorage.getItem("ActivityTwoLocation");
    if (activityTwoLocation != null) {
        document.getElementById("ActivityTwoLocation").defaultValue = activityTwoLocation;
    }
}

// END SCRIPTING FOR ACTIVITY TWO PAGE

// START SCRIPTING FOR ACTIVITY THREE PAGE

function ActivityThreeLocationChanged(){
    sessionStorage.setItem("ActivityThreeLocation", document.getElementById("ActivityThreeLocation").value);
    ActivityThreeLocation = sessionStorage.getItem("ActivityThreeLocation");
}

function setDefaultActivityThree(){
    ActivityThreeLocation = sessionStorage.getItem("ActivityThreeLocation");
    if (ActivityThreeLocation != null) {
        document.getElementById("ActivityThreeLocation").defaultValue = ActivityThreeLocation;
    }
}

// END SCRIPTING FOR ACTIVITY THREE PAGE

// START SCRIPTING FOR ACTIVITY FIVE PAGE

function ActivityFourLocationChanged(){
    sessionStorage.setItem("ActivityFourLocation", document.getElementById("ActivityFourLocation").value);
    ActivityFourLocation = sessionStorage.getItem("ActivityFourLocation");
}

function setDefaultActivityFive(){
    ActivityFourLocation = sessionStorage.getItem("ActivityFourLocation");
    if (ActivityFourLocation != null) {
        document.getElementById("ActivityFourLocation").defaultValue = ActivityFourLocation;
    }
}

// END SCRIPTING FOR ACTIVITY FIVE PAGE

// START SCRIPTING FOR ACTIVITY FIVE PAGE

function ActivityFiveLocationChanged(){
    sessionStorage.setItem("ActivityFiveLocation", document.getElementById("ActivityFiveLocation").value);
    ActivityFiveLocation = sessionStorage.getItem("ActivityFiveLocation");
}

function setDefaultActivityFive(){
    ActivityFiveLocation = sessionStorage.getItem("ActivityFiveLocation");
    if (ActivityFiveLocation != null) {
        document.getElementById("ActivityFiveLocation").defaultValue = ActivityFiveLocation;
    }
}

// END SCRIPTING FOR ACTIVITY FIVE PAGE

// START SCRIPTING FOR PUZZLE ONE

function PuzzleOneLocationChanged(){
    sessionStorage.setItem("PuzzleOneLocation", document.getElementById("PuzzleOneLocation").value);
    PuzzleOneLocation = sessionStorage.getItem("PuzzleOneLocation");
}

function setDefaultPuzzleOne(){
    PuzzleOneLocation = sessionStorage.getItem("PuzzleOneLocation");
    if (PuzzleOneLocation != null) {
        document.getElementById("PuzzleOneLocation").defaultValue = PuzzleOneLocation;
    }
}


// END SCRIPTING FOR PUZZLE ONE

// START SCRIPTING FOR PUZZLE TWO

function PuzzleTwoLocationChanged(){
    sessionStorage.setItem("PuzzleTwoLocation", document.getElementById("PuzzleTwoLocation").value);
    PuzzleTwoLocation = sessionStorage.getItem("PuzzleTwoLocation");
}

function setDefaultPuzzleTwo(){
    PuzzleTwoLocation = sessionStorage.getItem("PuzzleTwoLocation");
    if (PuzzleTwoLocation != null) {
        document.getElementById("PuzzleTwoLocation").defaultValue = PuzzleTwoLocation;
    }
}

// END SCRIPTING FOR PUZZLE TWO

// START SCRIPTING FOR PUZZLE THREE

function PuzzleThreeLocationChanged(){
    sessionStorage.setItem("PuzzleThreeLocation", document.getElementById("PuzzleThreeLocation").value);
    PuzzleThreeLocation = sessionStorage.getItem("PuzzleThreeLocation");
}

function setDefaultPuzzleThree(){
    PuzzleThreeLocation = sessionStorage.getItem("PuzzleThreeLocation");
    if (PuzzleThreeLocation != null) {
        document.getElementById("PuzzleThreeLocation").defaultValue = PuzzleThreeLocation;
    }
}

// END SCRIPTING FOR PUZZLE THREE

// START SCRIPTING FOR PUZZLE FOUR

function PuzzleFourLocationChanged(){
    sessionStorage.setItem("PuzzleFourLocation", document.getElementById("PuzzleFourLocation").value);
    PuzzleFourLocation = sessionStorage.getItem("PuzzleFourLocation");
}

function setDefaultPuzzleFour(){
    PuzzleFourLocation = sessionStorage.getItem("PuzzleFourLocation");
    if (PuzzleFourLocation != null) {
        document.getElementById("PuzzleFourLocation").defaultValue = PuzzleFourLocation;
    }
}

function DigitOneChanged(){
    sessionStorage.setItem("FirstDigit", document.getElementById("FirstDigit").value);
    DigitOne = sessionStorage.getItem("FirstDigit");
}

function setDefaultDigitOne(){
    DigitOne = sessionStorage.getItem("FirstDigit");
    if (DigitOne != null) {
        document.getElementById("FirstDigit").defaultValue = DigitOne;
    }
}

function DigitTwoChanged(){
    sessionStorage.setItem("SecondDigit", document.getElementById("SecondDigit").value);
    DigitTwo = sessionStorage.getItem("SecondDigit");
}

function setDefaultDigitTwo(){
    DigitTwo = sessionStorage.getItem("SecondDigit");
    if (DigitTwo != null) {
        document.getElementById("SecondDigit").defaultValue = DigitTwo;
    }
}

function DigitThreeChanged(){
    sessionStorage.setItem("ThirdDigit", document.getElementById("ThirdDigit").value);
    DigitThree = sessionStorage.getItem("ThirdDigit");
}

function setDefaultDigitThree(){
    DigitThree = sessionStorage.getItem("ThirdDigit");
    if (DigitThree != null) {
        document.getElementById("ThirdDigit").defaultValue = DigitThree;
    }
}

function PuzzleFiveClueLocationChanged(){
    sessionStorage.setItem("PuzzleFiveLocationClue", document.getElementById("PuzzleFiveLocationClue").value);
    PuzzleFiveLocationClue = sessionStorage.getItem("PuzzleFiveLocationClue");
}

function setDefaultPuzzleFiveClueLocation(){
    PuzzleFiveLocationClue = sessionStorage.getItem("PuzzleFiveLocationClue");
    if (PuzzleFiveLocationClue != null) {
        document.getElementById("PuzzleFiveLocationClue").defaultValue = PuzzleFiveLocationClue;
    }
}


// END SCRIPTING FOR PUZZLE FOUR

// START SCRIPTING FOR PUZZLE FIVE

function PuzzleFiveLocationChanged(){
    sessionStorage.setItem("PuzzleFiveLocation", document.getElementById("PuzzleFiveLocation").value);
    PuzzleFiveLocation = sessionStorage.getItem("PuzzleFiveLocation");
}

function setDefaultPuzzleFive(){
    PuzzleFiveLocation = sessionStorage.getItem("PuzzleFiveLocation");
    if (PuzzleFiveLocation != null) {
        document.getElementById("PuzzleFiveLocation").defaultValue = PuzzleFiveLocation;
    }
}

// END SCRIPTING FOR PUZZLE FIVE

// START SCRIPTING FOR PUZZLE SIX

function PuzzleSixLocationChanged(){
    sessionStorage.setItem("PuzzleSixLocation", document.getElementById("PuzzleSixLocation").value);
    PuzzleSixLocation = sessionStorage.getItem("PuzzleSixLocation");
}

function setDefaultPuzzleSix(){
    PuzzleSixLocation = sessionStorage.getItem("PuzzleSixLocation");
    if (PuzzleSixLocation != null) {
        document.getElementById("PuzzleSixLocation").defaultValue = PuzzleSixLocation;
    }
}

// END SCRIPTING FOR PUZZLE SIX

// START SCRIPTING FOR PUZZLE SEVEN

function PuzzleSevenLocationChanged(){
    sessionStorage.setItem("PuzzleSevenLocation", document.getElementById("PuzzleSevenLocation").value);
    PuzzleSevenLocation = sessionStorage.getItem("PuzzleSevenLocation");
}

function setDefaultPuzzleSeven(){
    PuzzleSevenLocation = sessionStorage.getItem("PuzzleSevenLocation");
    if (PuzzleSevenLocation != null) {
        document.getElementById("PuzzleSevenLocation").defaultValue = PuzzleSevenLocation;
    }
}


// END SCRIPTING FOR PUZZLE SEVEN

// START SCRIPTING FOR PUZZLE EIGHT

function PuzzleEightLocationChanged(){
    sessionStorage.setItem("PuzzleEightLocation", document.getElementById("PuzzleEightLocation").value);
    PuzzleEightLocation = sessionStorage.getItem("PuzzleEightLocation");
}

function setDefaultPuzzleEight(){
    PuzzleEightLocation = sessionStorage.getItem("PuzzleEightLocation");
    if (PuzzleEightLocation != null) {
        document.getElementById("PuzzleEightLocation").defaultValue = PuzzleEightLocation;
    }
}

// END SCRIPTING FOR PUZZLE EIGHT

// START SCRIPTING FOR CONGRATULATIONS PAGE
function setDefaultCongraulationsBoxes(){
    kickOffLocation = sessionStorage.getItem("kickOffLocation");
    activityOneLocation = sessionStorage.getItem("activityOneLocation");
    activityTwoLocation = sessionStorage.getItem("ActivityTwoLocation");
    PuzzleOneLocation = sessionStorage.getItem("PuzzleOneLocation");
    PuzzleTwoLocation = sessionStorage.getItem("PuzzleTwoLocation");
    PuzzleThreeLocation = sessionStorage.getItem("PuzzleThreeLocation");
    PuzzleFourLocation = sessionStorage.getItem("PuzzleFourLocation");
    PuzzleFiveLocation = sessionStorage.getItem("PuzzleFiveLocation");
    PuzzleSixLocation = sessionStorage.getItem("PuzzleSixLocation");
    ActivityThreeLocation = sessionStorage.getItem("ActivityThreeLocation");
    PuzzleSevenLocation = sessionStorage.getItem("PuzzleSevenLocation");
    PuzzleEightLocation = sessionStorage.getItem("PuzzleEightLocation");

    ActivityFiveLocation = sessionStorage.getItem("ActivityFiveLocation");
    ActivityFourLocation = sessionStorage.getItem("ActivityFourLocation");
    
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

    document.getElementById("CongratsActivityFiveLocation").defaultValue = ActivityFiveLocation;
    document.getElementById("CongratsActivityFourLocation").defaultValue = ActivityFourLocation;
}
// END SCRIPTING FOR CONGRATULATIONS PAGE


function CongratskickOffFormChanged() {
    sessionStorage.setItem("kickOffLocation", document.getElementById("CongratskickOffLocation").value);
    kickOffLocation = sessionStorage.getItem("kickOffLocation");
}

// END SCRIPTING FOR KICKOFF

// START SCRIPTING FOR ACTIVITY ONE PAGE

function CongratsActivityOneLocationChanged(){
    sessionStorage.setItem("activityOneLocation", document.getElementById("CongratsActivityOneLocation").value);
    activityOneLocation = sessionStorage.getItem("activityOneLocation");
}


// END SCRIPTING FOR ACTIVITY ONE PAGE

// START SCRIPTING FOR ACTIVITY TWO PAGE

function CongratsActivityTwoLocationChanged(){
    sessionStorage.setItem("ActivityTwoLocation", document.getElementById("CongratsActivityTwoLocation").value);
    activityTwoLocation = sessionStorage.getItem("activityTwoLocation");
}


// END SCRIPTING FOR ACTIVITY TWO PAGE

// START SCRIPTING FOR ACTIVITY THREE PAGE

function CongratsActivityThreeLocationChanged(){
    sessionStorage.setItem("ActivityThreeLocation", document.getElementById("CongratsActivityThreeLocation").value);
    ActivityThreeLocation = sessionStorage.getItem("ActivityThreeLocation");
}


// END SCRIPTING FOR ACTIVITY THREE PAGE

// START SCRIPTING FOR ACTIVITY FIVE PAGE

function CongratsActivityFourLocationChanged(){
    sessionStorage.setItem("ActivityFourLocation", document.getElementById("CongratsActivityFourLocation").value);
    ActivityFourLocation = sessionStorage.getItem("ActivityFourLocation");
}


// END SCRIPTING FOR ACTIVITY FIVE PAGE

// START SCRIPTING FOR ACTIVITY FIVE PAGE

function CongratsActivityFiveLocationChanged(){
    sessionStorage.setItem("ActivityFiveLocation", document.getElementById("CongratsActivityFiveLocation").value);
    ActivityFiveLocation = sessionStorage.getItem("ActivityFiveLocation");
}


// END SCRIPTING FOR ACTIVITY FIVE PAGE

// START SCRIPTING FOR PUZZLE ONE

function CongratsPuzzleOneLocationChanged(){
    sessionStorage.setItem("PuzzleOneLocation", document.getElementById("CongratsPuzzleOneLocation").value);
    PuzzleOneLocation = sessionStorage.getItem("PuzzleOneLocation");
}


// END SCRIPTING FOR PUZZLE ONE

// START SCRIPTING FOR PUZZLE TWO

function CongratsPuzzleTwoLocationChanged(){
    sessionStorage.setItem("PuzzleTwoLocation", document.getElementById("CongratsPuzzleTwoLocation").value);
    PuzzleTwoLocation = sessionStorage.getItem("PuzzleTwoLocation");
}


// END SCRIPTING FOR PUZZLE TWO

// START SCRIPTING FOR PUZZLE THREE

function CongratsPuzzleThreeLocationChanged(){
    sessionStorage.setItem("PuzzleThreeLocation", document.getElementById("CongratsPuzzleThreeLocation").value);
    PuzzleThreeLocation = sessionStorage.getItem("PuzzleThreeLocation");
}


// END SCRIPTING FOR PUZZLE THREE

// START SCRIPTING FOR PUZZLE FOUR

function CongratsPuzzleFourLocationChanged(){
    sessionStorage.setItem("PuzzleFourLocation", document.getElementById("CongratsPuzzleFourLocation").value);
    PuzzleFourLocation = sessionStorage.getItem("PuzzleFourLocation");
}


// END SCRIPTING FOR PUZZLE FOUR

// START SCRIPTING FOR PUZZLE FIVE

function CongratsPuzzleFiveLocationChanged(){
    sessionStorage.setItem("PuzzleFiveLocation", document.getElementById("CongratsPuzzleFiveLocation").value);
    PuzzleFiveLocation = sessionStorage.getItem("PuzzleFiveLocation");
}


// END SCRIPTING FOR PUZZLE FIVE

// START SCRIPTING FOR PUZZLE SIX

function CongratsPuzzleSixLocationChanged(){
    sessionStorage.setItem("PuzzleSixLocation", document.getElementById("CongratsPuzzleSixLocation").value);
    PuzzleSixLocation = sessionStorage.getItem("PuzzleSixLocation");
}


// END SCRIPTING FOR PUZZLE SIX

// START SCRIPTING FOR PUZZLE SEVEN

function CongratsPuzzleSevenLocationChanged(){
    sessionStorage.setItem("PuzzleSevenLocation", document.getElementById("CongratsPuzzleSevenLocation").value);
    PuzzleSevenLocation = sessionStorage.getItem("PuzzleSevenLocation");
}


// END SCRIPTING FOR PUZZLE SEVEN

// START SCRIPTING FOR PUZZLE EIGHT

function CongratsPuzzleEightLocationChanged(){
    sessionStorage.setItem("PuzzleEightLocation", document.getElementById("CongratsPuzzleEightLocation").value);
    PuzzleEightLocation = sessionStorage.getItem("PuzzleEightLocation");
}
