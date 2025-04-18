const qwerty= document.getElementById("qwerty");
const phrase= document.getElementById('phrase');
const btnReset= document.addEventListener('click');
const btnReset= document.addEventListener('button');

let myVariable = missed;

const phrases = [
    'beach bright warms', 
    'mountains high winds',
    'lake water refreshing',
    'spring flowers bloom',
    'big love god'
];

function getCharacterArrayFromRandomPhrase(phrases) {
    // 1. Randomly choose a phrase from the array
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomIndex];
  
    // 2. Split the chosen phrase into an array of characters
    const characterArray = randomPhrase.split('');
  
    return characterArray;
  }

  function addPhraseToDisplay(text){
    const ul = phrase.querySelector("ul");

    text.forEach(letter => {
        const li = document.createElement("li");
        li.textContent = letter;
        li.classList.add(letter === ' ' ? 'space' : 'letter');
        ul.appendChild(li);
    });
}

function checkLetter(value) {
    const listItems = phrase.querySelector('ul').children;
    let match = null;

    Array.from(listItems).forEach(item => {
        if (value === item.textContent) {
            item.classList.add('show');
            if (!match) match = value;
        }
    });

    return match;
}