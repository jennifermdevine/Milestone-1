let count = 4;
let counterDisplayElem = document.querySelector('#attempts');
counterDisplayElem.innerHTML = count;

let totalScore = 0;
let scoringDisplayElem = document.querySelector('#points');
scoringDisplayElem.innerHTML = totalScore;

document.getElementById('youwin').style.display = 'none';
document.getElementById('tryagain').style.display = 'none';

let fishingResultImage = new Array();

    fishingResultImage[0] = ["https://i.ibb.co/RzQXMB4/blackcrappie-pixelart.jpg", 3]; //black crappie
    fishingResultImage[1] = ["https://i.ibb.co/x55vhSM/stripedbass-pixelart.jpg", 3]; //striped bass
    fishingResultImage[2] = ["https://i.ibb.co/FVhmtw7/largemouthbass-pixelart.jpg", 3]; //largemouth bass
    fishingResultImage[3] = ["https://i.ibb.co/8skd521/rainbowtrout-pixelart.jpg", 3]; //rainbow trout
    fishingResultImage[4] = ["https://i.ibb.co/tqzPSZZ/glassbottle-pixelart.jpg", 1]; //glass bottle
    fishingResultImage[5] = ["https://i.ibb.co/HBNzWPQ/oldnewspaper-pixelart.jpg", 1]; //old newspaper
    fishingResultImage[6] = ["https://i.ibb.co/bvkJgTX/boot-pixelart.jpg", 1]; //single boot
    fishingResultImage[7] = ["https://i.ibb.co/ckdqLHv/casinochips-pixelart.png", 5]; //vintage casino chips
    fishingResultImage[8] = ["https://i.ibb.co/z8FsG07/humanremains-pixelart.jpg", 10]; //human remains

window.onload = function() {
    let audioEle = document.getElementById("birds");
    audioEle.volume = 0.3;
    audioEle.play();
}

cast.addEventListener('click', function () {
    var fishingReel = document.getElementById('fishingreel');
    fishingReel.currentTime = 0;
    fishingReel.play();
    setTimeout(function () {
      fishingReel.pause();
    }, 1525);
  });

function reelclick() {
    cast.addEventListener("click", reel);
}

function tryAgain() {
    location.reload(true);
}

cast.addEventListener("click",()=>{
    fishing();
});

function fishing() {
    count--;
    if (count <= 0) {
        cast.textContent = "Try Again?";
        cast.addEventListener("click", tryAgain);
        results();
    }
    counterDisplayElem.innerHTML = count;
}

function results() { 
    setTimeout(() => {
        if (totalScore >= 10) {
            winner();
        } else if (totalScore < 10) {
            loss();
        }
    }, 1000);
}

function winner() {
    setTimeout(() => {
        document.getElementById('youwin').style.display = 'inline';
        console.log("Winner!");
    }, "150")}

function loss() {
    setTimeout(() => {
    document.getElementById('tryagain').style.display = 'inline';
    console.log("Try again!");
}, "150")}

function addFishValue(fishingIndex) {
    let fishValue = fishingResultImage[fishingIndex][1];
    totalScore = fishValue + totalScore;
    scoringDisplayElem.innerHTML = totalScore;
}

function fishingResult() {
    let number = Math.floor(Math.random() * 100);
        if (number <= 30) {
            addFishValue(0);
            return document.getElementById("result").innerHTML = `<img id="fishid" value="3" alt="black crappie" src="${fishingResultImage[0][0]}" /><p id="caption">Black Crappie - ${fishingResultImage[0][1]} points!</p>`
        } else if (number <= 50) {
            addFishValue(1);
            return document.getElementById("result").innerHTML = `<img id="fishid" value="3" alt="striped bass" src="${fishingResultImage[1][0]}" /><p id="caption">Striped Bass - ${fishingResultImage[1][1]} points!</p>`;
        } else if (number <= 65) {
            addFishValue(2);
            return document.getElementById("result").innerHTML = `<img id="fishid" value="3" alt="largemouth bass" src="${fishingResultImage[2][0]}" /><p id="caption">Largemouth Bass - ${fishingResultImage[2][1]} points!</p>`;
        } else if (number <= 75) {
            addFishValue(3);
            return document.getElementById("result").innerHTML = `<img id="fishid" value="3" alt="rainbow trout" src="${fishingResultImage[3][0]}" /><p id="caption">Rainbow Trout - ${fishingResultImage[3][1]} points!</p>`;    
        } else if (number <= 85) {
            addFishValue(4);
            return document.getElementById("result").innerHTML = `<img id="fishid" value="1" alt="glass bottle" src="${fishingResultImage[4][0]}" /><p id="caption">Glass Bottle - ${fishingResultImage[4][1]} points!</p>`;
        } else if (number <= 90) {
            addFishValue(5);
            return document.getElementById("result").innerHTML = `<img id="fishid" value="1" alt="old newspaper" src="${fishingResultImage[5][0]}" /><p id="caption">Old Newspaper - ${fishingResultImage[5][1]} points!</p>`;
        } else if (number <= 95) {
            addFishValue(6);
            return document.getElementById("result").innerHTML = `<img id="fishid" value="1" alt="boot" src="${fishingResultImage[6][0]}" /><p id="caption">A Single Boot - ${fishingResultImage[6][1]} points!</p>`;
        } else if (number <= 98) {
            addFishValue(7);
            return document.getElementById("result").innerHTML = `<img id="fishid" value="5" alt="vintage casino chips" src="${fishingResultImage[7][0]}" /><p id="caption">Vintage Casino Chips - ${fishingResultImage[7][1]} points!</p>`;
        } else if (number <= 100) {
            addFishValue(8);
            return document.getElementById("result").innerHTML = `<img id="fishid" value="10" alt="human remains" src="${fishingResultImage[8][0]}" /><p id="caption">Human Remains - ${fishingResultImage[8][1]} points!</p>`;
        }
};