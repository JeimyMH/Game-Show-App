const qwerty = document.querySelector('qwerty');
const phrase = document.querySelector('phrase');
const overlay = document.querySelector('overlay');
const startButton = document.querySelector('btn-reset');

let missed = 0;

const phrases = [
    'beach is brigh and warm', 
    'Today the mountains have high winds',
    'Visting a fresh water lake',
    'In spring flowers bloom',
    'No bigger love than gods'
];

startButton.addEventListener('click', function(){
    
    if (overlay.className === 'start') {
    
      overlay.classList.remove('start');
      overlay.style.display = 'flex';
    } else if (overlay.className === 'win') {

      overlay.removeChild(win);
      overlay.classList.remove('win');
      overlay.style.display = 'flex';
    } else if (overlay.className === 'lose') {
 
      overlay.removeChild(lose);
      overlay.classList.remove('lose');
      overlay.style.display = 'flex';
    }

  });