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

getDay(1);
