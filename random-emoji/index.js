const btnEl = document.getElementById('btn');
const emojiNameEl = document.getElementById('emoji-name');

const emoji = [];

async function getEmoji() {
	let response = await fetch(
		'https://emoji-api.com/emojis?access_key=165f5062f2a5c26ec07977ca72de1b493f73b2db'
	);

	data = await response.json();
	// console.log(data);
	for (let i = 0; i < 1500; i++) {
		emoji.push({
			emojiImage: data[i].character,
			emojiName: data[i].unicodeName,
		});
	}
}

getEmoji();
// console.log(emoji);

btnEl.addEventListener('click', () => {
	// Test: console.log('clicked');
	const randomNum = Math.floor(Math.random() * emoji.length);
	// console.log(randomNum);
	btnEl.innerText = emoji[randomNum].emojiImage;
	emojiNameEl.innerText = emoji[randomNum].emojiName;
});
