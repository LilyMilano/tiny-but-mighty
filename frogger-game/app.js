const timeLeftDisplay = document.querySelector('#time-left');
const resultDisplay = document.querySelector('#result');
const buttonEl = document.querySelector('#start-pause-button');
const squaresEl = document.querySelectorAll('.grid-container div');

console.log(squaresEl);

let currentIndex = 76;
const squaresByRow = 9;

const moveFrog = (e) => {
	// console.log(e);

    squaresEl[currentIndex].classList.remove('frog');

	switch (e.key) {
		case 'ArrowLeft':
			console.log('move left');
			currentIndex -= 1;
			break;
		case 'ArrowRight':
			console.log('move right');
			currentIndex += 1;
			break;
		case 'ArrowUp':
			console.log('move up');
			currentIndex -= squaresByRow;
			break;
		case 'ArrowDown':
			console.log('move down');
			currentIndex += squaresByRow;
			break;
	}

	squaresEl[currentIndex].classList.add('frog');
};

document.addEventListener('keyup', moveFrog);
