const btnEl = document.getElementById('btn');
const animeContainerEl = document.querySelector('.anime-container');
const animeImgEl = document.querySelector('.anime-img');
const animeArtistNameEl = document.querySelector('.anime-artist');

btnEl.addEventListener('click', async function () {
	try {
		btnEl.disabled = true;
		btnEl.innerText = 'Loading...⌛';
		animeArtistNameEl.innerText = 'Updating...⌛';
		animeImgEl.src = 'spinner.svg';

		const response = await fetch('https://api.catboys.com/img');
		const data = await response.json();
		// console.log(data);

		btnEl.disabled = false;
		btnEl.innerText = 'Get Anime';
		animeContainerEl.style.display = 'block';
		animeImgEl.src = data.url;
		animeArtistNameEl.innerText = data.artist;
	} catch (error) {
		console.log(error);
		btnEl.disabled = false;
		btnEl.innerText = 'Get Anime';
		animeArtistNameEl.innerText = 'An error happened, please try again';
	}
});
