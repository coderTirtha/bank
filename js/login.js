const btnSubmit = document.getElementById('btn-submit');
const email = document.getElementById('email');
const password = document.getElementById('password');

btnSubmit.addEventListener('click', function() {
    if (email.value === "info@gmail.com" && password.value === "ABcd1234") {
        window.location.href = "./bank.html";
    } else {
        alert("Please enter your correct email and password");
    }
})