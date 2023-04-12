const inputsEl = document.querySelector('.inputs');
const resetBtnEl = document.querySelector('.reset-btn');
const hintEl = document.querySelector('.hint span');
const typingInputEl = document.querySelector('.typing-input');

function randomWord() {
	// getting random object from wordList
	let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
	let word = ranObj.word; //getting word of a random object
	console.log(word);

	hintEl.innerText = ranObj.hint;

	let html = '';
	for (let i = 0; i < word.length; i++) {
		html += `<input type="text" disabled>`;
	}
	inputsEl.innerHTML = html;
}
randomWord();

function initGame(e) {
	let key = e.target.value;
	console.log(key);
}

resetBtnEl.addEventListener('click', randomWord);
typingInputEl.addEventListener('input', initGame);
document.addEventListener('keydown', () => typingInputEl.focus());
