let getOut= 100;
let user = {
    name: "",
    health: 0,
    sad: 0,
    hungry: 0,
}

// these are the buttons for the game
const health = $(".healthbar")
const sad = $(".sadbar")
const hungry = $(".hungrybar")
const resetValueBtn = $(".reset-btn")
const $startForm = $(".start-form");
const restartGame = $('.restart-btn');


// these are the things that makes the bars go up 
const $healBar = $("#health")
const $saBar = $("#sad")
const $hunBar = $("#hungry")
const $dabar = $(".da-bar")

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
    user.health = 100;
    $healBar.width(user.health + '%');
    user.sad = 100;
    $saBar.width(user.sad + '%');
    user.hungry = 100;
    $hunBar.width(user.hungry +'%');

    user.dabar = 0;
    $dabar.width(user.dabar + '%');

    dabarLvl(bar1, 100);
    healthLvl(bar2, 100);
    sadLvl(bar3, 100);
    hungryLvl(bar4, 100);
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
        user.health--;
        $healBar.width(user.health + '%');
        if (user.health <= 0) {
            clearAllIntervals();
            gameOver();
        }
    }, speed);
    return user.health;
};

function sadLvl(bar, speed) {
    sadIntervalId = setInterval(function () {
        user.sad--;
        $saBar.width(user.sad + '%');
        if (user.sad <= 0) {
            clearAllIntervals();
            gameOver();
        }
    }, speed);
    return user.sad;
};

function hungryLvl(bar, speed) {
    hungryIntervalId = setInterval(function () {
        user.hungry--;
        $hunBar.width(user.hungry + '%');
        if (user.hungry <= 0) {
            clearAllIntervals();
            gameOver();
        }
    }, speed);
    return user.hungry;
};

function dabarLvl(bar, speed) {
    dabarIntervalId = setInterval(function () {
        user.dabar++;
        $dabar.width(user.dabar + '%');
        $('.that-text').text(user.dabar + '%')
        if (user.dabar >= 100) {
            clearAllIntervals();
            winGame();
        }
    }, speed);
    return user.dabar;
};

// I need to know the game logic
//ok i show you example
// please show methe document for game logic.
// what do you mean game logic?
// when click button, how to change pgress value?

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
             user[stats]= 0;
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
        //user health starts at 200
        user.health = 100;
        $healBar.width(user.health + '%');
        healthLvl($healBar, 200);
    } else if (this.id == 'sad'){
        clearInterval(sadIntervalId);
        user.sad = 100;
        $saBar.width(user.sad + '%');
        sadLvl($saBar, 400);
    } else {
        clearInterval(hungryIntervalId);
        user.hungry = 100;
        $hunBar.width(user.hungry +'%');
        hungryLvl($hunBar, 500);
    }
}

// theyre like buttons but you can interact with the game

$startForm.on('submit', gameStart)
- resetValueBtn.on('click', resetValue)
+ restartGame.on('click', gameStart)


// const healthButton= document.querySelector("#health");
// const sadButton= document.querySelector("#sad");
// const hungryButton= document.querySelector("#hungry");

// const healthBar= document.querySelector(".health progress");
// const sadBar= document.querySelector(".sad progress");
// const hungryBar= document.querySelector(".hungry progress");

// const healthBarValue= healthBar.value;
// const sadBarValue= sadBar.value;
// const hungryBarValue= hungryBar.value;

// healthButton.addEventListener("click", ()=> {
    
//     setInterval(()=> {
//         healthBar.value= sadBar.value+1;
//     }, 500)

    
// });

// sadButton.addEventListener("click", ()=> {
//     setInterval(()=> {
//         sadBar.value= sadBar.value+1;
//     }, 500)

// });

// hungryButton.addEventListener("click", ()=> {
//     setInterval(()=> {
//         hungryBar.value= hungryBar.value +1;
//     }, 500)


// });




  /* if(healthBar.value === 11 && sadBar.value === 11 && hungryBar.value === 11){
        alert("I win");
    
      winGame();
    
        setTimeout(()=> {
            document.querySelector(".lose-popup").style.display = "block";
        }, 3000);
    }  */



