const cardArray = [
	{
		name: 'fries',
		img: 'images/fries.png',
	},
	{
		name: 'cheeseburger',
		img: 'images/cheeseburger.png',
	},
	{
		name: 'hotdog',
		img: 'images/hotdog.png',
	},
	{
		name: 'ice-cream',
		img: 'images/ice-cream.png',
	},
	{
		name: 'milkshake',
		img: 'images/milkshake.png',
	},
	{
		name: 'pizza',
		img: 'images/pizza.png',
	},
	{
		name: 'fries',
		img: 'images/fries.png',
	},
	{
		name: 'cheeseburger',
		img: 'images/cheeseburger.png',
	},
	{
		name: 'hotdog',
		img: 'images/hotdog.png',
	},
	{
		name: 'ice-cream',
		img: 'images/ice-cream.png',
	},
	{
		name: 'milkshake',
		img: 'images/milkshake.png',
	},
	{
		name: 'pizza',
		img: 'images/pizza.png',
	},
];

cardArray.sort(() => 0.5 - Math.random());

// Math.random returns a random number between 0 and 1. So if it happens to give you a number less then 0.5 then you get a negative number and if it’s over that then you get a positive.

// If the function you pass to sort is the ‘compare function’ and if it’s less than 0, element a goes first, otherwise element b goes first.

// 0.5 - Math.random() will give you random numbers that are roughly 50% negative and 50% positive.

// Start with the array [3,9,1]

// If the random function returns a negative number, the 3 and the 9 stay in the same order ie; you have [3,9,1]

// BUT if the random function returns a positive number, then they go in the opposite order (b comes first) ie; you now have [9,3,1]

const gridEl = document.querySelector('#grid');
const resultEl = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

const createBoard = () => {
	for (let i = 0; i < cardArray.length; i++) {
		const card = document.createElement('img');
		card.setAttribute('src', 'images/blank.png');
		card.setAttribute('data-id', i);
		card.addEventListener('click', flipCard);
		gridEl.appendChild(card);
	}
};

createBoard();

function checkMatch() {
	const cards = document.querySelectorAll('img');
	const optionOneId = cardsChosenIds[0];
	const optionTwoId = cardsChosenIds[1];

	console.log('Check for match');

	if (optionOneId == optionTwoId)
		alert('You have clicked the same image, try another one!');
	cards[optionOneId].setAttribute('src', 'images/blank.png');
	cards[optionTwoId].setAttribute('src', 'images/blank.png');

	if (cardsChosen[0] == cardsChosen[1]) {
		alert('You found a match!');
		cards[optionOneId].setAttribute('src', 'images/white.png');
		cards[optionTwoId].setAttribute('src', 'images/white.png');
		cards[optionOneId].removeEventListener('click', flipCard);
		cards[optionTwoId].removeEventListener('click', flipCard);
		cardsWon.push(cardsChosen);
	} else {
		alert('Sorry, try again!');
		cards[optionOneId].setAttribute('src', 'images/blank.png');
		cards[optionTwoId].setAttribute('src', 'images/blank.png');
	}

	resultEl.textContent = cardsWon.length;

	cardsChosen = [];
	cardsChosenIds = [];

	if (cardsWon.length == cardArray.length / 2) {
		resultEl.textContent = 'Congratulations you found them all!';
	}
}

function flipCard() {
	const cardId = this.getAttribute('data-id');
	cardsChosen.push(cardArray[cardId].name);
	cardsChosenIds.push(cardId);
	this.setAttribute('src', cardArray[cardId].img);
	if (cardsChosen.length === 2) {
		setTimeout(checkMatch, 500);
	}
}
