const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");

const phrases = [
    "Sunny beaches", 
    "High windy mountains",
    "Fresh lake water",
    "Spring flowers bloom",
    "God loves big"
];

let missed = 0;

document.addEventListener("click", e => {
    if (e.target.tagName === "A") document.getElementById("overlay").style.display = "none";
    else if (e.target.tagName === "BUTTON") 

  {
    let scoreboard = document.querySelectorAll("#scoreboard img");
    if (!checkLetter(e.target)) {
        missed++; scoreboard[scoreboard.length - missed].src = "images/lostHeart.png";
        }
    checkWin();
  }


});


function getRandomPhraseAsArray(arr = phrases) {
  const i = Math.floor(Math.random() * arr.length);
  const splitPhrase = arr[i].toUpperCase().split("");
  return splitPhrase;
}


function addPhraseToDisplay(arr) {
  const display = document.querySelector("#phrase ul");
 
    for (i = 0; i < arr.length; i++) {
    const text = arr[i];
    let li = document.createElement("li");

    li.textContent = text;
   
    if (/\s/.test(text)) li.classList.add("space");
    else li.classList.add("letter");
    display.appendChild(li);
  }
}

function checkLetter(btn) {
  const phraseEls = document.querySelectorAll(".letter");
  let match = false;
  
    for (i = 0; i < phraseEls.length; i++) {
    let el = phraseEls[i];
    if (el.textContent === btn.textContent.toUpperCase()) {
      console.log(el);
      el.classList.add("show");
      match = true;
    }
  }

  btn.setAttribute("disabled","disabled");

  return match;
}

qwerty.addEventListener("click", e => {
});

function checkWin() {
  const letterEls = document.querySelectorAll(".letter");
  const shownLetterEls = document.querySelectorAll(".show");
  let overlay = document.getElementById("overlay");
  let title = document.querySelector("#overlay .title");
  let start = document.querySelector("#overlay a");

    if (letterEls.length === shownLetterEls.length) {
    overlay.style.display = "flex";
    title.textContent = "YOU WIN :)";
    overlay.className = "win";
    start.style.display = "none";
  } 
  
    else if (missed >= 5) {
    overlay.style.display = "flex";
    title.textContent = "YOU LOSE :(";
    overlay.className = "lose";
    start.style.display = "none";
  }
}

addPhraseToDisplay(getRandomPhraseAsArray());
