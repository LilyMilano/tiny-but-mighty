const btnEl = document.getElementById('btn');
const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');

const apiURL = 'https://api.quotable.io/random';

async function getQuote() {
	try {
		// console.log('clicked');
		const response = await fetch(apiURL);
		const data = await response.json();
		// console.log(data)
		const quoteContent = data.content;
		// console.log(quoteContent);
		const quoteAuthor = data.author;
		// console.log(quoteAuthor);

		quoteEl.innerText = quoteContent;
		authorEl.innerText = '~ ' + quoteAuthor;
		// console.log(data);
	} catch (error) {
		console.log(error);
		quoteEl.innerText = 'An error happened, try again later';
	}
}

btnEl.addEventListener('click', getQuote);
