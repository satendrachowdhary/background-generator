var css = document.querySelector("#bg-code");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randombtn = document.querySelector(".random");

function generateRandomNumber() {
  return Math.ceil(Math.random() * 255);
}

randombtn.addEventListener("click", () => {
  var r = generateRandomNumber(); 
  var r2 = generateRandomNumber();  

  var g = generateRandomNumber();
  var g2 = generateRandomNumber();  

  var b = generateRandomNumber();
  var b2 = generateRandomNumber();  

  color1.value = `rgb(${r}${g}${b}`;
  color2.value = `rgb(${r2}${g2}${b2}`;

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
