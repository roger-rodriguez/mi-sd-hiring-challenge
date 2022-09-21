/**
 *
 * @param {number} time - Unix time in seconds returns it in miliseconds
 */
export function convertDate(time) {
	return time * 1000;
}

const geoAPI = "https://se-weather-api.herokuapp.com/api/v1/geo";
const forecastAPI = "https://se-weather-api.herokuapp.com/api/v1/forecast";
const input = document.getElementById("zipcode-input");

async function getLocation(input) {
	try {
		const response = await fetch(`${geoAPI}?zip_code=${input}`);
		if (!response.ok) {
			throw new Error(`Error Status: ${response.status}`);
		}
		console.log(response);
		return response.json();
	} catch (error) {
		console.error(`error ${error}`);
		console.error("The Promise is rejected!", error);
	} finally {
		console.log(
			"getLocation: The Promise is settled, meaning it has been resolved or rejected."
		);
	}
}
getLocation(10001);
async function getforecastApi(latitude, longitude) {
	let date = new Date().toLocaleDateString();
	console.log(date);
	try {
		const forecast = await fetch(
			`${forecastAPI}?latitude=${latitude}&longitude=${longitude}&date=${date}`
		);
		console.log(forecast);
		return forecast.json();
	} catch (err) {
		console.error(err);
	} finally {
		console.log(
			"forecastApi:The Promise is settled, meaning it has been resolved or rejected."
		);
	}
}
getforecastApi(40.7505, -73.9934);
