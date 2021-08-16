let btn = document.querySelector('#btn');
let icon = document.querySelector(".icon");
let email1 = document.querySelector("#email");
let small = document.querySelector("small");
let form = document.querySelector("#signup");
let inputField = document.querySelector(".input-field");
function validateEmail(inputText) {

let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email1.value.match(mailformat)) {
		alert("Valid email address!");
		document.form1.text1.focus();
		return true;
	}
	else {
		inputField.style.border = "1px solid hsla(0, 93%, 68%, 1)";
		small.style.display = "block";
		inputField.style.opacity = "0.8";
		icon.style.display = "block";
		btn.style.background =  "hsla(0, 80%, 86%, 1)";
		btn.style.boxShadow = "0.2em 0.7em 1.7em hsl(0, 36%, 70%)";
		document.form1.text1.focus();
		return false;
		}
	}