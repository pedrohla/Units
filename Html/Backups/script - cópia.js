$(document).ready(function(){
  console.log('Ready disparado');
});
/* Sets global controller */
var inputOrigin;
/* Sets the input */
var theInput = document.getElementById("mainInput");
/* Sets menu object */
var menuList = document.getElementById("unitsMenu");
/* Gets menu selected option */
var inputOrigin = menuList.options[menuList.selectedIndex].value;
/* Runs the correct conversion function when typing */
theInput.oninput = function () {
	if (inputOrigin == "celsius") {
		fromCelsius(this.value)
	}
	else if (inputOrigin == "fahrenheit") {
		fromFahrenheit(this.value)
	}
	else if (inputOrigin == "kelvin") {
		fromKelvin(this.value)
	}
};
/* Updates global controller and Runs the correct conversion function when changing source */
menuList.oninput = function () {
	inputOrigin = menuList.options[menuList.selectedIndex].value;
	if (inputOrigin == "celsius") {
		fromCelsius(theInput.value)
	}
	else if (inputOrigin == "fahrenheit") {
		fromFahrenheit(theInput.value)
	}
	else if (inputOrigin == "kelvin") {
		fromKelvin(theInput.value)
	}
};
/* Conversion functions */
function fromCelsius(valNum) {
	valNum = parseFloat(valNum);
	document.getElementById("toCelsius").innerHTML = valNum;
	document.getElementById("toFahrenheit").innerHTML = (valNum * 1.8) + 32;
	document.getElementById("toKelvin").innerHTML = valNum + 273.15;
}

function fromKelvin(valNum) {
	valNum = parseFloat(valNum);
	document.getElementById("toCelsius").innerHTML = ((valNum - 273.15) * 1.8) + 32;
	document.getElementById("toFahrenheit").innerHTML = (valNum * 1.8) + 32;
	document.getElementById("toKelvin").innerHTML = valNum;
}

function fromFahrenheit(valNum) {
	valNum = parseFloat(valNum);
	document.getElementById("toCelsius").innerHTML = (valNum - 32) / 1.8;
	document.getElementById("toFahrenheit").innerHTML = valNum;
	document.getElementById("toKelvin").innerHTML = ((valNum - 32) / 1.8) + 273.15;
}