var nameinput = document.getElementById("form_name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var submit = document.getElementById("submit-button");

const name_error = document.querySelector(".name__error");
const email_error = document.querySelector(".email__error");
const password_error = document.querySelector(".password__error");

function checkName() {
    if (nameinput.value.trim() === "") {
        name_error.textContent = "Name field cannot be empty";
        return false;
    } else {
        name_error.textContent = "";
        return true;
    }
}

function checkEmail() {
    const emailFormat = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

    if (!emailFormat.test(email.value)) {
        email_error.textContent = "Invalid email address";
        return false;
    } else {
        email_error.textContent = "";
        return true;
    }
}

function checkPassword() {
    if (password.value.length < 6) {
        password_error.textContent = "Password must be at least 6 characters";
        return false;
    } else {
        password_error.textContent = "";
        return true;
    }
}

function formValidation() {
    const isNameValid = checkName();
    const isEmailValid = checkEmail();
    const isPasswordValid = checkPassword();

    submit.disabled = !(isNameValid && isEmailValid && isPasswordValid);
}

nameinput.addEventListener("input", formValidation);
email.addEventListener("input", formValidation);
password.addEventListener("input", formValidation);

var register = document.getElementById("reg-form");

register.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!submit.disabled) {
        alert("Form submitted successfully!");
    }
});
