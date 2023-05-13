const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phoneno = document.getElementById('phoneno');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');
let popup = document.getElementById("popup");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phonenoValue = phoneno.value.trim();
    const passwordValue = password.value.trim();
    const confirmpasswordValue = confirmpassword.value.trim();
    let flag = false

    if (usernameValue.length < 5) {
        setErrorFor(username, 'Name must not be less than 5 characters');
        flag = true
    } else {
        setSuccessFor(username);
    }

    if (phonenoValue === '0123456789') {
        setErrorFor(phoneno, 'Phone Number is invalid');
        flag = true
    } else if (phonenoValue.length < 10) {
        setErrorFor(phoneno, 'Phone Number is invalid');
        flag = true
    } else {
        setSuccessFor(phoneno);
    }

    if (passwordValue === 'password') {
        setErrorFor(password, 'Password is invalid');
        flag = true
    } else if (passwordValue === 'PASSWORD') {
        setErrorFor(password, 'Password is invalid');
        flag = true
    } else if (passwordValue === usernameValue) {
        setErrorFor(password, 'Password is invalid');
        flag = true
    } else if (passwordValue.length < 8) {
        setErrorFor(password, 'Password is invalid');
        flag = true
    } else {
        setSuccessFor(password);
    }

    if (confirmpasswordValue !== passwordValue) {
        setErrorFor(confirmpassword, 'Passwords does not match');
        flag = true
    } else {
        setSuccessFor(confirmpassword);
    }

    if (!flag) {
        openPopup()
    }

}
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function openPopup() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
}