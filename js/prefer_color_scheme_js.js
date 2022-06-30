let body = document.querySelector("body");
let content = document.getElementById("content");

window
	.matchMedia("(prefers-color-scheme: dark)")
	.addEventListener("change", function (e) {
		const colorScheme = e.matches ? "dark" : "light";
		console.log(colorScheme);

		if (colorScheme === "dark") {
			body.style.backgroundColor = "green";
			content.setAttribute("class", "dark");
		} else {
			body.style.backgroundColor = "blue";
			content.setAttribute("class", "light");
		}
	});
