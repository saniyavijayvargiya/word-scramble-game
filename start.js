let clicked = document.getElementById("rules-written");

function displayRules() {
    clicked.style.display = "block";
}

function closeRules() {
    clicked.style.display = "none";
}

const rulesButton = document.querySelector(".rules");
rulesButton.addEventListener("click", displayRules);
const closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", closeRules);