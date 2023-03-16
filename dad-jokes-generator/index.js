const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

const apiKey = 'YnPOsWpNSGpZ2iLq1GrNQQ==ZuQwhqRaiH9BkT5Q';

const options = {
	method: 'GET',
	headers: {
		'X-Api-Key': apiKey,
	},
};

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';

async function getJoke() {
	try {
		joke.innerText = 'Updating...⌛';
		btnEl.disabled = true;
		btnEl.innerText = 'Loading...🔋';

		const response = await fetch(apiURL, options);
		const data = await response.json();

		btnEl.disabled = false;
		btnEl.innerText = 'Tell me a Joke';

		// console.log(data[0].joke);
		jokeEl.innerText = data[0].joke;
	} catch (error) {
		joke.innerText = 'An error happened, try again later 🤔';
		btnEl.disabled = false;
		btnEl.innerText = 'Tell me a Joke';
		console.log(error);
	}
}

btnEl.addEventListener('click', getJoke);
