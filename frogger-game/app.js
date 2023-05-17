const timeLeftDisplay = document.querySelector('#time-left');
const resultDisplay = document.querySelector('#result');
const buttonEl = document.querySelector('#start-pause-button');
const squaresEl = document.querySelectorAll('.grid-container div');
const logsLeftEl = document.querySelectorAll('.log-left');
const logsRightEl = document.querySelectorAll('.log-right');
const carsLeftEl = document.querySelectorAll('.car-left');
const carsRightEl = document.querySelectorAll('.car-right');

console.log(squaresEl);

let currentIndex = 76;
const squaresByRow = 9;

const moveFrog = (event) => {
	// console.log(event);

	squaresEl[currentIndex].classList.remove('frog');

	switch (event.key) {
		case 'ArrowLeft':
			if (currentIndex % squaresByRow !== 0) currentIndex -= 1;
			break;
		case 'ArrowRight':
			if (currentIndex % squaresByRow < squaresByRow - 1) currentIndex += 1;
			break;
		case 'ArrowUp':
			if (currentIndex - squaresByRow >= 0) currentIndex -= squaresByRow;
			break;
		case 'ArrowDown':
			if (currentIndex + squaresByRow < Math.pow(squaresByRow, 2))
				currentIndex += squaresByRow;
			break;
	}

	squaresEl[currentIndex].classList.add('frog');
};

document.addEventListener('keyup', moveFrog);

const autoMoveElements = () => {
	logsLeftEl.forEach((logLeftEl) => moveLogLeft(logLeftEl));
	logsRightEl.forEach((logRightEl) => moveLogRight(logRightEl));
	carsLeftEl.forEach((carLeftEl) => moveCarLeft(carLeftEl));
	carsRightEl.forEach((carRightEl) => moveCarRight(carRightEl));
};

const moveLogLeft = (logLeftEl) => {
	switch (true) {
		case logLeftEl.classList.contains('l1'):
			logLeftEl.classList.remove('l1');
			logLeftEl.classList.add('l2');
			break;
		case logLeftEl.classList.contains('l2'):
			logLeftEl.classList.remove('l2');
			logLeftEl.classList.add('l3');
			break;
		case logLeftEl.classList.contains('l3'):
			logLeftEl.classList.remove('l3');
			logLeftEl.classList.add('l4');
			break;
		case logLeftEl.classList.contains('l4'):
			logLeftEl.classList.remove('l4');
			logLeftEl.classList.add('l5');
			break;
		case logLeftEl.classList.contains('l5'):
			logLeftEl.classList.remove('l5');
			logLeftEl.classList.add('l1');
			break;
	}
};

const moveLogRight = (logRightEl) => {
	switch (true) {
		case logRightEl.classList.contains('l1'):
			logRightEl.classList.remove('l1');
			logRightEl.classList.add('l5');
			break;
		case logRightEl.classList.contains('l2'):
			logRightEl.classList.remove('l2');
			logRightEl.classList.add('l1');
			break;
		case logRightEl.classList.contains('l3'):
			logRightEl.classList.remove('l3');
			logRightEl.classList.add('l2');
			break;
		case logRightEl.classList.contains('l4'):
			logRightEl.classList.remove('l4');
			logRightEl.classList.add('l3');
			break;
		case logRightEl.classList.contains('l5'):
			logRightEl.classList.remove('l5');
			logRightEl.classList.add('l4');
			break;
	}
};

const moveCarLeft = (carLeftEl) => {
	switch (true) {
		case carLeftEl.classList.contains('c1'):
			carLeftEl.classList.remove('c1');
			carLeftEl.classList.add('c2');
			break;
		case carLeftEl.classList.contains('c2'):
			carLeftEl.classList.remove('c2');
			carLeftEl.classList.add('c3');
			break;
		case carLeftEl.classList.contains('c3'):
			carLeftEl.classList.remove('c3');
			carLeftEl.classList.add('c1');
			break;
	}
};

const moveCarRight = (carRightEl) => {
	switch (true) {
		case carRightEl.classList.contains('c1'):
			carRightEl.classList.remove('c1');
			carRightEl.classList.add('c3');
			break;
		case carRightEl.classList.contains('c2'):
			carRightEl.classList.remove('c2');
			carRightEl.classList.add('c1');
			break;
		case carRightEl.classList.contains('c3'):
			carRightEl.classList.remove('c3');
			carRightEl.classList.add('c2');
			break;
	}
};

setInterval(autoMoveElements, 1000);
