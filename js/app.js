const qwerty = document.querySelector('qwerty');
const phrase = document.querySelector('phrase');
const overlay = document.querySelector('overlay');
const startButton = document.getElementsByClassName('.btn-reset');

let missed = 0;

const phrases = [
    'The beach is bright and warm', 
    'There are high wind mountains',
    'The lake is fresh water',
    'In spring flowers bloom',
    'No bigger love than gods'
];

startButton.addEventListener('click', () => {
	if (startButton.textContent === 'Start Game') {
		startGame();
		overlay.style.display = 'none';	
	} else {
		resetGame();
		startGame();
		overlay.style.display = 'none';
	}
});

function getRandomPhraseArray(array) {
    const min = 0;
    const max = array.length;
    let randNumber = Math.floor(Math.random() * (max - min)) + min;
    return (array[randNumber].split(''));
  }