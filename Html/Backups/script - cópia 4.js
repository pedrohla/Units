// Input mask
$(document).ready(function () {
	$("#mainInput").keydown(function (e) {
		// Allow: backspace, delete, tab, escape, enter and .
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
			// Allow: Ctrl+A, Command+A
			(e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
			// Allow: home, end, left, right, down, up
			(e.keyCode >= 35 && e.keyCode <= 40)) {
			// let it happen, don't do anything
			return;
		}
		// Ensure that it is a number and stop the keypress
		if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
			e.preventDefault();
		}
	});
});
// Defines unit controller
var unitChanger = document.getElementById("unitPicker");
var inputOrigin = unitChanger.innerHTML;
// Defines the input
var theInput = document.getElementById("mainInput");
theInput.value = "";
// Defines the munit list picker
var menuList = document.getElementById("unitPickerList");
menuList.style.display = "none";
/* Runs the correct conversion function when typing */
theInput.oninput = function () {
	if (inputOrigin === "celsius") {
		fromCelsius(this.value)
	}
	else if (inputOrigin === "fahrenheit") {
		fromFahrenheit(this.value)
	}
	else if (inputOrigin === "kelvin") {
		fromKelvin(this.value)
	}
	else if (inputOrigin === "kilos") {
		fromKilos(this.value)
	}
	else if (inputOrigin === "pounds") {
		fromPounds(this.value)
	}
};
unitChanger.onclick = function () {
	var menuVisibility = menuList.style.display;
	if (menuVisibility === "none") {
		menuList.style.display = "block";
	}
	else {
		menuList.style.display = "none";
	}
};
// Updates global controller and Runs the correct conversion function when changing source
document.getElementById("toCelsius").onclick = function () {
	unitChanger.innerHTML = "celsius";
	inputOrigin = "celsius";
	fromCelsius(theInput.value);
	menuList.style.display = "none";
};
document.getElementById("toFahrenheit").onclick = function () {
	unitChanger.innerHTML = "fahrenheit";
	inputOrigin = "fahrenheit";
	fromFahrenheit(theInput.value);
	menuList.style.display = "none";
};
document.getElementById("toKelvin").onclick = function () {
	unitChanger.innerHTML = "kelvin";
	inputOrigin = "kelvin";
	fromKelvin(theInput.value);
	menuList.style.display = "none";
};
var changeSource = function () {};
document.getElementById("toPounds").onclick = function () {
	unitChanger.innerHTML = "pounds";
	inputOrigin = "pounds";
	fromPounds(theInput.value);
	menuList.style.display = "none";
};
// Conversion functions
function fromCelsius(valNum) {
	valNum = parseFloat(valNum);
	var test = isNaN(valNum);
	if (test) {
		clearField();
	}
	else {
		document.getElementById("fromCelsius").innerHTML = valNum;
		document.getElementById("fromFahrenheit").innerHTML = (valNum * 1.8) + 32;
		document.getElementById("fromKelvin").innerHTML = valNum + 273.15;
	}
}

function fromKelvin(valNum) {
	valNum = parseFloat(valNum);
	var test = isNaN(valNum);
	if (test) {
		clearField();
	}
	else {
		document.getElementById("fromCelsius").innerHTML = valNum - 273.15;
		document.getElementById("fromFahrenheit").innerHTML = ((valNum - 273.15) * 1.8) + 32;
		document.getElementById("fromKelvin").innerHTML = valNum;
	}
}

function fromFahrenheit(valNum) {
	valNum = parseFloat(valNum);
	var test = isNaN(valNum);
	if (test) {
		clearField();
	}
	else {
		document.getElementById("fromCelsius").innerHTML = (valNum - 32) / 1.8;
		document.getElementById("fromFahrenheit").innerHTML = valNum;
		document.getElementById("fromKelvin").innerHTML = ((valNum - 32) / 1.8) + 273.15;
	}
}

function fromKilos(valNum) {
	valNum = parseFloat(valNum);
	var test = isNaN(valNum);
	if (test) {
		clearField();
	}
	else {
		document.getElementById("fromKilos").innerHTML = valNum;
		document.getElementById("fromPounds").innerHTML = valNum * 2.20462262185;
	}
}

function fromPounds(valNum) {
	valNum = parseFloat(valNum);
	var test = isNaN(valNum);
	if (test) {
		clearField();
	}
	else {
		document.getElementById("fromKilos").innerHTML = valNum / 0.45359237;
		document.getElementById("fromPounds").innerHTML = valNum;
	}
}
var clearField = function () {
	document.getElementById("fromCelsius").innerHTML = " ";
	document.getElementById("fromFahrenheit").innerHTML = " ";
	document.getElementById("fromKelvin").innerHTML = " ";
}
var mySubmit = document.getElementById("mainForm");
mySubmit.onsubmit = function () {
		theInput.blur();
		return false;
	}
	// Changes the Category
var category1 = '<li><div class="converted" id="fromCelsius"></div><div class="unitType">celsius</div></li><li><div class="converted" id="fromFahrenheit"></div><div class="unitType">fahrenheit</div></li><li><div class="converted" id="fromKelvin"></div><div class="unitType">kelvin</div></li>';
var category2 = '<li><div class="converted" id="fromKilos"></div><div class="unitType">kilos</div></li><li><div class="converted" id="fromPounds"></div><div class="unitType">pounds</div></li>';
var convertedList = document.getElementById("convertedList");
document.getElementById("catTemperature").onclick = function () {
	convertedList.innerHTML = category1;
};
document.getElementById("catWeight").onclick = function () {
	convertedList.innerHTML = category2;
};
// Changes the Unit list
var listTemperature = '<input type="radio" name="unit" value="" id="toCelsius" checked="checked" /><label for="toCelsius">celsius</label><input type="radio" name="unit" value="" id="toFahrenheit" /><label for="toFahrenheit">fahrenheit</label><input type="radio" name="unit" value="" id="toKelvin" /><label for="toKelvin">kelvin</label>';
var listWeight = '<input type="radio" name="unit" value="" id="toKilos" checked="checked" /><label for="toKilos">kilos</label><input type="radio" name="unit" value="" id="toPounds" /><label for="toPounds">pounds</label>';