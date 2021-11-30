let getOut= 100;
let user = {
    name: "",
    health: 200,
    sad: 200,
    hungry: 200,
}

// these are the buttons for the game
const health = $(".healthbar")
const sad = $(".sadbar")
const hungry = $(".hungrybar")
const resetValueBtn = $(".reset-btn")
const $startForm = $(".start-form");
const restartGame = $('.restart-btn');

// these are the things that makes the bars go up 
const $healBar = $("#health-bar")
const $saBar = $("#sad-bar")
const $hunBar = $("#hungry-bar")
const $dabar = $("#da-bar")

// these are the things you see how far you are
let healthIntervalId = "";
let sadIntervalId = "";
let hungryIntervalId = "";
let dabarIntervalId = "";
let graphicIntervalId = "";


// this thing makes the magic happens
function gameStart(e) {
    e.preventDefault();
    popupsBeGone();
    user.name = $(".username-field").val();
    $(".username").text(user.name);
    play();
}

// this makes every slides goaway except the game scene
function popupsBeGone(){
    $(".start-popup").css("display", "none");
    $(".win-popup").css("display", "none");
    $(".lose-popup").css("display", "none");
}

// this is the bar of the game
function play(bar1, bar2, bar3, bar4) {
    // dabarLvl(bar1, 999);
    healthLvl(bar2, 200);
    sadLvl(bar3, 200);
    hungryLvl(bar4, 200);
}

// this is what pop ups when you finish or lose the game 
function winGame() {
    $(".win-popup").css("display", "flex");
    resetAllValues();
    
}

function gameOver() {
    $('.lose-popup').css("display", "flex");
    resetAllValues();
}

// this the thing where it increses the bars 
function healthLvl(bar,  speed) {
    healthIntervalId = setInterval(function () {
        user.health++;
        health.width(user.health + '%');
        if (user.health <= 200) {
            clearAllIntervals();
            gameOver();
        }
    }, speed);
    return user.health;
};

function sadLvl(bar, speed) {
    sadIntervalId = setInterval(function () {
        user.sad++;
        sad.width(user.sad + '%');
        if (user.sad <= 200) {
            clearAllIntervals();
            gameOver();
        }
    }, speed);
    return user.sad;
};

function hungryLvl(bar, speed) {
    hungryIntervalId = setInterval(function () {
        user.hungry++;
        hungry.width(user.hungry + '%');
        if (user.hungry <= 200) {
            clearAllIntervals();
            gameOver();
        }
    }, speed);
    return user.hungry;
};

// function dabarLvl(bar, speed) {
//     dabarIntervalId = setInterval(function () {
//         user.dabar++;
//         bar.width(user.dabar + '%');
//         $('.that-text').text(user.dabar + '%')
//         if (user.dabar >= 100) {
//             clearAllIntervals();
//             winGame();
//         }
//     }, speed);
//     return dabar;
// };

//variable 
// display variabl using DOM

// this tells the bar to stop 
function clearAllIntervals() {
    clearInterval(hungryIntervalId);
    clearInterval(sadIntervalId);
    clearInterval(healthIntervalId);
    clearInterval(dabarIntervalId);
    


};

// this retarts the buttons
function resetAllValues(){
    for (const stats in user){
        if(stats == "name"){
            console.log("the users name is ${user[stats]}");
        } else if (stats =="eat"){
             user[stats]= 100;
            $eatBar.css("width", user[stats] + "%");
            console.log(user[stats]);
        } else {
            user[stats] = 0;
            console.log(user[stats]);
            $hunBar.css("width", user[stats] + "%");
            $saBar.css("width", user[stats] + "%");
            $dabar.css("width", user[stats] + "%")
        }
    }
}
    

function resetValue(e){
    e.preventDefault();
    if (this.id == 'health'){
        clearInterval(healthIntervalId);
        user.health = 200;
        $healbar.width(user.health + '%');
        healthLvl($healBar, 200);
    } else if (this.id == 'sad'){
        clearInterval(sadIntervalId);
        user.sad = 200;
        $saBar.width(user.sad + '%');
        sadLvl($saBar, 0);
    } else {
        clearInterval(hungryIntervalId);
        user.hungry = 0;
        $hunBar.width(user.hungry +'%');
        hungryLvl($hunBar, 0);
    }
}

const gameStartTime = new Date().getTime();

    let globalTimer = setInterval(function() {

        let now = new Date().getTime();
        let milli = now - gameStartTime;
        let seconds = Math.floor((milli%(1000*60))/1000);

        console.log(seconds);

        

    }, 1000);

// it does something

$startForm.on('submit', gameStart)
- resetValueBtn.on('click', resetValue)
+ restartGame.on('click', gameStart)