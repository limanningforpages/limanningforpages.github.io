let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
console.log(matched);

let body = document.querySelector("body");
let content = document.getElementById("content");

if (dark) {
	body.style.backgroundColor = "#green";
	content.setAttribute("class", "dark");
} else {
	body.style.backgroundColor = "#blue";
	content.setAttribute("class", "light");
}
