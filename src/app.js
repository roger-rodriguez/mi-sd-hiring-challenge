import { convertDate } from "./utils";
import { getDisplayWheather } from "./utils";

const input = document.getElementById("zipcode-input");
const form = document.getElementById("form");

function clearForm() {
	if (document.getElementsByClassName("weather-container")[0]) {
		document.getElementsByClassName("weather-container")[0].remove();
	}
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	getDisplayWheather();
	clearForm();
	input.value = "";
});
