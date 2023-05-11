const squaresEl = document.querySelectorAll('.grid-container div');
const resultEl = document.getElementById('result');
const currentPlayerEl = document.getElementById('current-player');
let currentPlayer = 1;

//? GAME
/* Connect Four (also known as Four Up, Plot Four, Find Four, Four in a Row, Four in a Line, Drop Four, and Gravitrips (in Soviet Union)) is a two-player board game in which the players first choose a color and then take turns dropping one colored disc from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs. */

for (let i = 0; i < squaresEl.length; i++) {
	squaresEl[i].onclick = () => {
		// If the square below ou current square is taken, you can go ontop of it
		if (squaresEl[i + 7].classList.contains('taken')) {
			if (currentPlayer == 1) {
				squaresEl[i].classList.add('taken');
				squaresEl[i].classList.add('player-one');
				currentPlayer = 2;
				currentPlayerEl.innerHTML = currentPlayer;
			}
			if (currentPlayer == 2) {
				squaresEl[i].classList.add('taken');
				squaresEl[i].classList.add('player-two');
				currentPlayer = 1;
				currentPlayerEl.innerHTML = currentPlayer;
			}
		}
	};
}
