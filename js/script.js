var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("randomizer");

/*
 *	Changes the background based color values
 */
function setGradient(firstColor, secondColor) {
	body.style.background =
		"linear-gradient(to right, "
		+ firstColor
		+ ", "
		+ secondColor
		+ ")";

		css.textContent = body.style.background + ";"
}

/*
 *	Returns a random number from 0 to 255
 */
function randomizer() {
	return Math.floor(Math.random() * Math.floor(250));
}

/*
 *	Returns a random rgb color string
 */
function randomColor() {
	var randomColor = `rgb(${randomizer()}, ${randomizer()}, ${randomizer()})`;
	return randomColor;
}

/*
 *	Changes the background based on the input values
 */
function setGradientOnInput() {
	setGradient(color1.value, color2.value);
}

/*
 *	Changes the background based on random values
 */
function setRandomGradient() {
	setGradient(randomColor(), randomColor());
}

color1.addEventListener("input", setGradientOnInput);
color2.addEventListener("input", setGradientOnInput);
randomButton.addEventListener("click", setRandomGradient);

setGradientOnInput();
