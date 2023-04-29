const apiKey = 'c3a746c974bd73d6ec546956c2e7ace8';
const apiUrl =
	'https://api.openweathermap.org/data/2.5/weather?units=metric&q=caracas';

async function checkWeather() {
	const response = await fetch(apiUrl + `&appid=${apiKey}`);
	let data = await response.json();

	console.log(data);
}

checkWeather();
