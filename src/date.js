const cloud = require("../img/cloudy.png");
const rain = require("../img/rain.png");
const snow = require("../img/snow.png");
const sun = require("../img/sunny.png");

const icons = {
	cloud,
	rain,
	snow,
	sun,
};

function getDay(index) {
	const weekday = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const date = new Date();
	let day = date.getDay();
	day + index > 6 ? day : day - 7;
	return weekday[day + index];
}

export function createWeatherElementData1(daily, city, regionCode) {
	const threeDaysOnly = daily.data.slice(2);
	const weatherContainer = document.createElement("div");
	weatherContainer.className = "weather-container";
	app.append(weatherContainer);

	const weatherHeader = document.createElement("h2");
	weatherHeader.className = "weather-header";
	weatherHeader.innerText = `WEATHER FORECAST FOR ${city}, ${regionCode}`;
	weatherContainer.append(weatherHeader);

	const forecastContainer = document.createElement("div");
	forecastContainer.className = "forecast-container";
	weatherContainer.append(forecastContainer);

	// SHOWING THE WEATHER FOR 3 DAYS
	//  for (let i = 0; i < 3; i++)
	threeDaysOnly.forEach((day, index) => {
		const dayContainer = document.createElement("div");
		dayContainer.className = "day-container";
		forecastContainer.append(dayContainer);

		const weekDay = document.createElement("h3");
		weekDay.className = "weekday";
		weekDay.innerText = index === 0 ? "Today" : getDay(index);
		dayContainer.append(weekDay);

		const tempContainer = document.createElement("div");
		tempContainer.className = "temp-container";
		dayContainer.append(tempContainer);

		const highTemp = document.createElement("p");
		highTemp.className = "high-temperature";
		highTemp.innerText = `${Math.floor(day.temperatureHigh)} F`;
		const lowTemp = document.createElement("p");
		lowTemp.className = "low-temperature";
		lowTemp.innerText = `${Math.floor(day.temperatureMin)} F`;

		const weatherDescription = document.createElement("p");
		weatherDescription.className = "weather-description";
		weatherDescription.innerText = day.icon;

		const forecastIcon = document.createElement("img");
		forecastIcon.className = "forecast-icon";
		// Switch statement to change the icon based on the weather
		switch (day.icon) {
			case "cloudy":
				forecastIcon.src = icons["cloud"];
				break;
			case "rain":
				forecastIcon.src = icons["rain"];
				break;
			case "snow":
				forecastIcon.src = icons["snow"];
				break;
			case "sunny":
				forecastIcon.src = icons["sun"];
				break;
			default:
				forecastIcon.src = icons["sun"];
				break;
		}

		// Append the elements to the DOM
		tempContainer.innerHTML =
			forecastIcon.outerHTML +
			weatherDescription.outerHTML +
			highTemp.outerHTML +
			lowTemp.outerHTML;
	});
}
