const computerChoiceEl = document.getElementById('computer-choice');
const userChoiceEl = document.getElementById('user-choice');
const resultDisplayEl = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
	possibleChoice.addEventListener('click', (e) => {
		userChoice = e.target.id;
		userChoiceEl.innerHTML = userChoice;
		generateComputerChoice();
		getResult();
	})
);

const generateComputerChoice = () => {
	const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1; // possibleChoices.length + 1 = 3

	if (randomNumber === 1) {
		computerChoice = 'rock';
	}
	if (randomNumber === 2) {
		computerChoice = 'scissors';
	}
	if (randomNumber === 3) {
		computerChoice = 'paper';
	}

	computerChoiceEl.innerHTML =  computerChoice;
};

const getResult = () => {
	if (computerChoice === userChoice) {
		result = 'It is a draw!';
	}
	if (computerChoice === 'rock' && userChoice === 'paper') {
		result = 'You win!';
	}
	if (computerChoice === 'rock' && userChoice === 'scissors') {
		result = 'You lost!';
	}
	if (computerChoice === 'paper' && userChoice === 'scissors') {
		result = 'You win!';
	}
	if (computerChoice === 'paper' && userChoice === 'rock') {
		result = 'You lost!';
	}
	if (computerChoice === 'scissors' && userChoice === 'rock') {
		result = 'You win!';
	}
	if (computerChoice === 'scissors' && userChoice === 'paper') {
		result = 'You lost!';
	}

	resultDisplayEl.innerHTML = result;
};
