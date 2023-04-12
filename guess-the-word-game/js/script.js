const inputsEl = document.querySelector('.inputs');
const resetBtnEl = document.querySelector('.reset-btn');
const hintEl = document.querySelector('.hint span');
const typingInputEl = document.querySelector('.typing-input');

let word,
	incorrects = [];

function randomWord() {
	// getting random object from wordList
	let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
	word = ranObj.word; //getting word of a random object
	console.log(word);

	hintEl.innerText = ranObj.hint;

	let html = '';
	for (let i = 0; i < word.length; i++) {
		html += `<input type="text" disabled>`;
	}
	inputsEl.innerHTML = html;
}
randomWord();

function initGame(event) {
	let key = event.target.value;
	if (key.match(/^[A-Za-z]+$/)) {
		console.log(key);
		if (word.includes(key)) {
			// if user found a letter of the word
			for (let i = 0; i < word.length; i++) {
				// showing found letter in the input value
				if (word[i] === key) {
					inputsEl.querySelectorAll('input')[i].value = key;
				}
			}
		} else {
			console.log('letter not found');
		}
	}
	typingInputEl.value = '';
}

resetBtnEl.addEventListener('click', randomWord);
typingInputEl.addEventListener('input', initGame);
document.addEventListener('keydown', () => typingInputEl.focus());
