import { wordsArray } from "./words.js";

let wordDisplayed = document.querySelector("#word");
let meaningDisplayed = document.querySelector("#meaning");
let timeDisplayed = document.querySelector("#time");
let scoreDisplayed = document.querySelector("#score");
let inputField = document.querySelector("input");
let correctWord, timer;
let currentScore = 0;


function gameOver() {
    location.href = "over.html";
    localStorage["finalscore"] = currentScore;
}


const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--;
            return timeDisplayed.innerHTML = maxTime;
        }
        alert("Oh no, time's up!");
        gameOver();
    }, 1000)
}


const initGame = () => {
    timeDisplayed.innerHTML = 30;
    initTimer(30);
    scoreDisplayed.innerHTML = currentScore;
    inputField.value = "";

    let index = Math.floor(Math.random() * wordsArray.length);
    let selectedWord = wordsArray[index].word;

    if (!selectedWord || selectedWord === undefined || selectedWord === "") {
        gameOver();
    }

    let selectedMeaning = wordsArray[index].meaning;

    let obj;
    wordsArray.splice(wordsArray.findIndex(obj => obj.word === selectedWord), 1);
    
    correctWord = selectedWord.toUpperCase();
    let strarray = selectedWord.split("");
    let i, j, k;
    for (i = 0; i < strarray.length; i++) {
        j = Math.floor(Math.random() * i);
        k = strarray[i];
        strarray[i] = strarray[j];
        strarray[j] = k;
    }
    wordDisplayed.innerHTML = strarray.join("");
    meaningDisplayed.innerHTML = selectedMeaning;
}


const checkWord = () => {
    let wordEntered = inputField.value.toUpperCase().trim();
    if (!wordEntered || wordEntered === "") {
        return alert("You haven't entered the word.");
    } else if (wordEntered !== correctWord) {
        alert(`Oops, ${wordEntered.toLowerCase()} is not the correct word!`);
        gameOver();
    } else {
        alert(`Yay, ${wordEntered.toLowerCase()} is the correct word!`);
        currentScore += 10;
        initGame();
    }
}


let checkButton = document.querySelector(".submit");
checkButton.addEventListener("click", (e) => {
    inputField = document.querySelector("input");
    checkWord();
})

initGame();
export { currentScore };
