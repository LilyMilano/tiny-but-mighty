const btnEl = document.getElementById('btn');
const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');

const apiURL = 'https://api.quotable.io/random';

async function getQuote() {
	try {
		// console.log('clicked');
		btnEl.innerText = 'Loading...🔋';
		btnEl.disabled = true;

		quoteEl.innerText = 'Updating...⌛';
		authorEl.innerText = 'Updating...🪫';

		const response = await fetch(apiURL);
		const data = await response.json();
		// console.log(data)
		const quoteContent = data.content;
		// console.log(quoteContent);
		const quoteAuthor = data.author;
		// console.log(quoteAuthor);

		quoteEl.innerText = quoteContent;
		authorEl.innerText = '~ ' + quoteAuthor;

		btnEl.innerText = 'Get a Quote';
		btnEl.disabled = false;
	} catch (error) {
		console.log(error);
		quoteEl.innerText = 'An error happened, try again later';
		authorEl.innerText = 'An error happened';

		btnEl.innerText = 'Get a Quote';
		btnEl.disabled = false;
	}
}

getQuote();

btnEl.addEventListener('click', getQuote);
