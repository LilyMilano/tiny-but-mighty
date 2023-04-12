const inputsEl = document.querySelector('.inputs');
const resetBtnEl = document.querySelector('.reset-btn');
const hintEl = document.querySelector('.hint span');
const guessLeftEl = document.querySelector('.guess-left span');
const wrongLetterEl = document.querySelector('.wrong-letter span');
const typingInputEl = document.querySelector('.typing-input');

let word,
	maxGuesses,
	corrects = [],
	incorrects = [];

function randomWord() {
	// getting random object from wordList
	let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
	word = ranObj.word; //getting word of a random object
	maxGuesses = 8;
	corrects = [];
	incorrects = [];
	console.log(word);

	hintEl.innerText = ranObj.hint;
	guessLeftEl.innerText = maxGuesses;
	wrongLetterEl.innerText = incorrects;

	let html = '';
	for (let i = 0; i < word.length; i++) {
		html += `<input type="text" disabled>`;
	}
	inputsEl.innerHTML = html;
}
randomWord();

function initGame(event) {
	let key = event.target.value;
	if (
		key.match(/^[A-Za-z]+$/) &&
		!incorrects.includes(`${key}`) &&
		!corrects.includes(key)
	) {
		if (word.includes(key)) {
			// if user found a letter of the word
			for (let i = 0; i < word.length; i++) {
				// showing found letter in the input value
				if (word[i] === key) {
					corrects.push(key);
					inputsEl.querySelectorAll('input')[i].value = key;
				}
			}
		} else {
			maxGuesses--; // decrement maxGuesses by 1
			incorrects.push(`${key}`);
		}
		guessLeftEl.innerText = maxGuesses;
		wrongLetterEl.innerText = incorrects;
	}
	typingInputEl.value = '';

	setTimeout(() => {
		if (corrects.length === word.length) {
			// if user found all letters
			alert(`Congrats! You found the word ${word.toUpperCase()}`);
			randomWord(); // calling randomWord(), so the game reset
		} else if (maxGuesses < 1) {
			// if user couldn't found all letters
			alert("Game over! You don't have remaining guesses 🫠");
			for (let i = 0; i < word.length; i++) {
				// show all the letters in the input
				inputsEl.querySelectorAll('input')[i].value = word[i];
			}
		}
	});
}

resetBtnEl.addEventListener('click', randomWord);
typingInputEl.addEventListener('input', initGame);
inputsEl.addEventListener('click', () => typingInputEl.focus());
document.addEventListener('keydown', () => typingInputEl.focus());
