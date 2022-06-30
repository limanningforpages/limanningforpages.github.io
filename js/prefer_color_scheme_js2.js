let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
console.log(matched);

let content = document.getElementById("content");

if (dark) {
	document.body.style.backgroundColor = "green";
	content.setAttribute("class", "dark");
} else {
	document.body.style.backgroundColor = "blue";
	content.setAttribute("class", "light");
}
