import { convertDate } from './utils';
import cloudy from '../img/cloudy.png';
import rain from '../img/rain.png';
import snow from '../img/snow.png';
import sunny from '../img/sunny.png';

let d = new Date();
let date = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;

async function getForecast() {
	let geo = await fetch(
		'https://se-weather-api.herokuapp.com/api/v1/geo?zip_code=sw1a0aa '
	);
	let geoData = await geo.json();
	let title = document.querySelector('.title');
	let h2 = document.createElement('h2');

	h2.appendChild(
		document.createTextNode(
			`weather forecast for ${geoData.county}, ${geoData.country}`
		)
	);
	title.appendChild(h2);

	let forecast = await fetch(
		`https://se-weather-api.herokuapp.com/api/v1/forecast?latitude=${geoData.latitude}&longitude=${geoData.longitude}&date=${date}`
	);

	let forecastData = await forecast.json();

	return forecastData.daily.data.map((val) => {
		let ul = document.querySelector('ul');
		let li = document.createElement('li');
		let h3 = document.createElement('h3');
		let iconDesc = document.createElement('p');
		let max = document.createElement('p');
		let min = document.createElement('p');
		let div = document.createElement('div');
		let img = document.createElement('img');
		let time = new Date(val.time * 1000);

		iconDesc.className = 'iconDesc';
		iconDesc.appendChild(document.createTextNode(val.icon));
		min.appendChild(
			document.createTextNode(Math.round((val.temperatureMax - 32) / 1.8) + '°/')
		);
		max.appendChild(
			document.createTextNode(Math.round((val.temperatureMin - 32) / 1.8) + '°c')
		);
		h3.appendChild(
			document.createTextNode(time.toLocaleString('en-us', { weekday: 'long' }))
		);
		div.appendChild(min);
		div.appendChild(max);
		li.appendChild(h3);
		li.appendChild(iconDesc);
		li.appendChild(img);
		li.appendChild(div);
		ul.appendChild(li);

		switch (val.icon) {
			case 'cloudy':
				return (img.src = cloudy);
			case 'rain':
				return (img.src = rain);
			case 'snow':
				return (img.src = snow);
			case 'sunny':
				return (img.src = sunny);
			default:
		}
	});
}

getForecast();
