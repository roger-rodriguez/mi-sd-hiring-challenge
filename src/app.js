import { convertDate } from "./utils";
import { getDisplayWheather } from "./utils";
console.log("hello world");

const input = document.getElementById("zipcode-input");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	getDisplayWheather();
});
