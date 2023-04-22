const btnEl = document.getElementById('btn');
const errorMessageEl = document.getElementById('errorMessage');
const galleryEl = document.getElementById('gallery');

async function fetchImage() {
	// console.log('clicked');
	const inputValue = document.getElementById('input').value;

	if (inputValue < 1 || inputValue > 10) {
		errorMessageEl.style.display = 'block';
		errorMessageEl.innerText = 'Enter a number between 1 and 10';
		return;
	}

	imgs = '';

	try {
		btnEl.style.display = 'none';
		const loading = `<img src="spinner.svg" />`;
		galleryEl.innerHTML = loading;

		await fetch(
			`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(
				Math.random() * 1000
			)}&client_id=StrV61j14r-a3H6cQ1YQiyKqogWbgLrLL5FTDeP13bk`
		).then((response) =>
			response.json().then((data) => {
				// console.log(data);
				if (data) {
					data.forEach((element) => {
						imgs += `
                        <img src=${element.urls.small} alt= "image" />
                        `;
						galleryEl.style.display = 'block';
						galleryEl.innerHTML = imgs;
						btnEl.style.display = 'block';
						errorMessageEl.style.display = 'none';
					});
				}
			})
		);
	} catch (error) {
		console.log(error);
		errorMessageEl.style.display = 'block';
		errorMessageEl.innerHTML = 'An error happened, try again later';
		btnEl.style.display = 'block';
		galleryEl.style.display = 'none';
	}
}

btnEl.addEventListener('click', fetchImage);
