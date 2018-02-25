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
var unitChanger = document.getElementById("unitPickerContent");
var inputOrigin = unitChanger.innerHTML;
// Defines the input
var theInput = document.getElementById("mainInput");
theInput.value = "";
// Defines the munit list picker
var menuList = document.getElementById("unitPickerList");
menuList.style.display = "none";
/* Runs the correct conversion function when typing */
var calculate = function () {
	if (inputOrigin === "celsius") {
		fromCelsius(theInput.value)
	} else if (inputOrigin === "fahrenheit") {
		fromFahrenheit(theInput.value)
	} else if (inputOrigin === "kelvin") {
		fromKelvin(etheInput.value)
	} else if (inputOrigin === "kilos") {
		fromKilos(theInput.value)
	} else if (inputOrigin === "pounds") {
		fromPounds(theInput.value)
	}
};
/*
theInput.oninput = function () {
	if (inputOrigin === "celsius") {
		fromCelsius(this.value)
	} else if (inputOrigin === "fahrenheit") {
		fromFahrenheit(this.value)
	} else if (inputOrigin === "kelvin") {
		fromKelvin(this.value)
	} else if (inputOrigin === "kilos") {
		fromKilos(this.value)
	} else if (inputOrigin === "pounds") {
		fromPounds(this.value)
	}
};
*/
var visibilityToggle = function (ele) {
	var menu = document.getElementById(ele);
	var menuVisibility = menu.style.display;
	if (menuVisibility === "none") {
		menu.style.display = "block";
	} else {
		menu.style.display = "none";
	}
};

/*
unitChanger.onclick = function () {
	var menuVisibility = menuList.style.display;
	if (menuVisibility === "none") {
		menuList.style.display = "block";
	} else {
		menuList.style.display = "none";
	}
};
*/
// Updates unit controller and Runs the correct conversion function when changing source
var changeUnit = function (ele) {
	var id = ele.id;
	if (id == "toCelsius") {
		unitChanger.innerHTML = "celsius";
		inputOrigin = "celsius";
		fromCelsius(theInput.value);
		menuList.style.display = "none";
	} else if (id == "toFahrenheit") {
		unitChanger.innerHTML = "fahrenheit";
		inputOrigin = "fahrenheit";
		fromFahrenheit(theInput.value);
		menuList.style.display = "none";
	} else if (id == "toKelvin") {
		unitChanger.innerHTML = "kelvin";
		inputOrigin = "kelvin";
		fromKelvin(theInput.value);
		menuList.style.display = "none";
	} else if (id == "toKilos") {
		unitChanger.innerHTML = "kilos";
		inputOrigin = "kilos";
		fromKilos(theInput.value);
		menuList.style.display = "none";
	} else if (id == "toPounds") {
		unitChanger.innerHTML = "pounds";
		inputOrigin = "pounds";
		fromPounds(theInput.value);
		menuList.style.display = "none";
	} else {
		return;
	}
};
// Updates category controller
var changeCategory = function (ele) {
	var id = ele.id;
	if (id === "catTemp") {
		$('#convertedList').load('resources/lists/listTemperature.html');
		$('#unitPickerList').load('resources/menus/menuTemperature.html');
		unitChanger.innerHTML = "celsius";
		inputOrigin = "celsius";
		theInput.value = null;
	} else if (id === "catWeight") {
		$('#convertedList').load('resources/lists/listWeight.html');
		$('#unitPickerList').load('resources/menus/menuWeight.html');
		unitChanger.innerHTML = "kilos";
		inputOrigin = "kilos";
		theInput.value = null;
	} else {
		return;
	}
};
// Updates collection list
var changeCollection = function (ele2) {
	var id = ele2.id;
	if (id === "colAll") {
		$('#categoryList').load('resources/collections/colAll.html');
		$('#convertedList').load('resources/lists/listTemperature.html');
		$('#unitPickerList').load('resources/menus/menuTemperature.html');
		unitChanger.innerHTML = "celsius";
		inputOrigin = "celsius";
		theInput.value = null;
	} else if (id === "colPracticalities") {
		$('#categoryList').load('resources/collections/colPracticalities.html');
		$('#convertedList').load('resources/lists/listTemperature.html');
		$('#unitPickerList').load('resources/menus/menuTemperature.html');
		unitChanger.innerHTML = "celsius";
		inputOrigin = "celsius";
		theInput.value = null;
	} else if (id === "colPhysics") {
		$('#categoryList').load('resources/collections/colPhysics.html');
		$('#convertedList').load('resources/lists/listArea.html');
		$('#unitPickerList').load('resources/menus/menuArea.html');
		unitChanger.innerHTML = "feet";
		inputOrigin = "feet";
		theInput.value = null;
	} else if (id === "colMath") {
		$('#categoryList').load('resources/collections/colMath.html');
		$('#convertedList').load('resources/lists/listData.html');
		$('#unitPickerList').load('resources/menus/menuData.html');
		unitChanger.innerHTML = "megabytes";
		inputOrigin = "megabytes";
		theInput.value = null;
	} else {
		return;
	}
};


// Conversion functions
function fromCelsius(valNum) {
	valNum = parseFloat(valNum);
	var test = isNaN(valNum);
	if (test) {
		//clearField();
	} else {
		document.getElementById("fromCelsius").innerHTML = valNum;
		document.getElementById("fromFahrenheit").innerHTML = (valNum * 1.8) + 32;
		document.getElementById("fromKelvin").innerHTML = valNum + 273.15;
	}
}

function fromKelvin(valNum) {
	valNum = parseFloat(valNum);
	var test = isNaN(valNum);
	if (test) {
		//clearField();
	} else {
		document.getElementById("fromCelsius").innerHTML = valNum - 273.15;
		document.getElementById("fromFahrenheit").innerHTML = ((valNum - 273.15) * 1.8) + 32;
		document.getElementById("fromKelvin").innerHTML = valNum;
	}
}

function fromFahrenheit(valNum) {
	valNum = parseFloat(valNum);
	var test = isNaN(valNum);
	if (test) {
		//clearField();
	} else {
		document.getElementById("fromCelsius").innerHTML = (valNum - 32) / 1.8;
		document.getElementById("fromFahrenheit").innerHTML = valNum;
		document.getElementById("fromKelvin").innerHTML = ((valNum - 32) / 1.8) + 273.15;
	}
}

function fromKilos(valNum) {
	valNum = parseFloat(valNum);
	var test = isNaN(valNum);
	if (test) {
		//clearField();
	} else {
		document.getElementById("fromKilos").innerHTML = valNum;
		document.getElementById("fromPounds").innerHTML = valNum * 2.20462262185;
	}
}

function fromPounds(valNum) {
	valNum = parseFloat(valNum);
	var test = isNaN(valNum);
	if (test) {
		//clearField();
	} else {
		document.getElementById("fromKilos").innerHTML = valNum * 0.45359237;
		document.getElementById("fromPounds").innerHTML = valNum;
	}
}
/*
var clearField = function () {
	document.getElementById("fromCelsius").innerHTML = " ";
	document.getElementById("fromFahrenheit").innerHTML = " ";
	document.getElementById("fromKelvin").innerHTML = " ";
}
*/
var mySubmit = document.getElementById("mainForm");
mySubmit.onsubmit = function () {
	theInput.blur();
	return false;
};
