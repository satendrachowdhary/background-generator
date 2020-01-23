var css = document.querySelector("#bg-code");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randombtn = document.querySelector(".random");

function generateRandomNumber() {
  return Math.ceil(Math.random() * 255);
}

function decimalToHex(d) {
  var hex = Number(d).toString(16);
  var padding = 2;

  while (hex.length < padding) {
    hex = "0" + hex;
  }

  return hex;
}

randombtn.addEventListener("click", () => {
  var r = generateRandomNumber();
  var rhex = decimalToHex(r);

  var r2 = generateRandomNumber();
  var r2hex = decimalToHex(r2);

  var g = generateRandomNumber();
  var ghex = decimalToHex(g);

  var g2 = generateRandomNumber();
  var g2hex = decimalToHex(g2);

  var b = generateRandomNumber();
  var bhex = decimalToHex(b);

  var b2 = generateRandomNumber();
  var b2hex = decimalToHex(b2);

  color1.value = `#${rhex}${ghex}${bhex}`;
  color2.value = `#${r2hex}${g2hex}${b2hex}`;

  body.style.background = ` linear-gradient(to right, ${color1.value} , ${color2.value})`;
  css.textContent = body.style.background + ";";
});

body.style.background = ` linear-gradient(to right, ${color1.value} , ${color2.value})`;
css.textContent = body.style.background + ";";

function setGradient() {
  body.style.background = ` linear-gradient(to right, ${color1.value} , ${color2.value})`;

  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
