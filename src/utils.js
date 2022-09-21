import { createWeatherElementData1 } from "./date.js";
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

// This is the endpoint for retrieving the geo data associated with a given zip code. This endpoint should be called with `GET` and accepts a single query string parameter (`zip_code`).
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

// Get the weather based on the location coordinates
// This is the endpoint for retrieving the weather forecast data associated with at a lat/lon. This endpoint should be called with `GET` and accepts three query string parameters (`latitude`, `longitude`, `date`).
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

export async function getDisplayWheather() {
	const zipInput = input.value;
	// Retrieve the location data
	let location = await getLocation(zipInput);
	const { city, latitude, longitude, regionCode } = location;

	//Retrieve the coordinates from the location
	const coordinates = await getforecastApi(latitude, longitude);
	const { daily } = coordinates;

	// function to display the wheather and create the dynamic html with js
	createWeatherElementData1(daily, city, regionCode);
}
