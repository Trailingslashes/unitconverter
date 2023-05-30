const inputEl = document.getElementById("unit-input");
const buttonEl = document.getElementById("convert");
const metersEl = document.getElementById("meters-feet");
const litersEl = document.getElementById("liters-gallons");
const kiloEl = document.getElementById("kilo-pounds");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

buttonEl.addEventListener("click", function () {
  let inputValue = inputEl.value;

  metersEl.innerHTML = `<p>${inputValue} meters = ${(
    inputValue * meterToFeet
  ).toFixed(3)} feet | ${inputValue} feet = 
	${(inputValue * 0.3048).toFixed(3)} meters</p>`;

  litersEl.innerHTML = `<p>${inputValue} liters = ${(
    inputValue * literToGallon
  ).toFixed(3)} gallons | ${inputValue} gallons = ${(
    inputValue * 3.78541
  ).toFixed(3)} liters</p>`;

  kiloEl.innerHTML = `<p>${inputValue} kilos = ${(
    inputValue * kiloToPound
  ).toFixed(3)} pounds | ${inputValue} pounds = ${(
    inputValue * 0.453592
  ).toFixed(3)} kilos</p>`;
});
