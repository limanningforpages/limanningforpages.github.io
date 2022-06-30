let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
console.log(matched);

let body = document.querySelector("body");
let content = document.getElementById("content");

if (dark) {
	body.style.backgroundColor = "#1a1a1a";
	content.setAttribute("class", "dark");
} else {
	body.style.backgroundColor = "#f5f5f5";
	content.setAttribute("class", "light");
}
