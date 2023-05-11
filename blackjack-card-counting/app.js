let count = 0;

function cardCounter(card) {
	switch (card) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			count++;
			break;
		case 10:
		case 'J':
		case 'Q':
		case 'K':
		case 'A':
			count--;
			break;
	}

	let result = `${count} ${count > 0 ? 'Bet' : 'Hold'}`;
	return result;
}
cardCounter(2);
cardCounter(5);
cardCounter(6);
cardCounter(10);
cardCounter('J');
console.log(cardCounter(result)); // 1 Bet
