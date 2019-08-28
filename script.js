var css = document.querySelector("#bg-code");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randombtn = document.querySelector(".random");

function generateRandomNumber() {
  return Math.ceil(Math.random() * 255);
}

var rgbToHex = function(rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
};

randombtn.addEventListener("click", () => {
  var r = generateRandomNumber();
  

  var r2 = generateRandomNumber();
  var rhex2 = rgbToHex(r2);

  var g = generateRandomNumber();
  

  var g2 = generateRandomNumber();
  var ghex2 = rgbToHex(g2);

  var b = generateRandomNumber();
  

  var b2 = generateRandomNumber();
  var bhex2 = rgbToHex(b2);

  color1.value = `rgb(${r}${g}${b}`;
  color2.value = `#${rhex2}${ghex2}${bhex2}`;

  body.style.background = ` linear-gradient(to right, ${color1.value} , ${
    color2.value
  })`;
  css.textContent = body.style.background + ";";
});

body.style.background = ` linear-gradient(to right, ${color1.value} , ${
  color2.value
})`;
css.textContent = body.style.background + ";";

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
