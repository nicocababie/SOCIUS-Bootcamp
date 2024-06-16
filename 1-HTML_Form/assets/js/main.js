document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("idPassword");
    const togglePassword = document.getElementById("togglePassword");

    togglePassword.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.innerHTML = '<i class="fa fa-eye-slash" aria-hidden="true"></i>';
        } else {
            passwordInput.type = "password";
            togglePassword.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
        }
    });
});

function submit() {
    if (validateForm()) {
        alert("Form submitted successfully! You will be redirected to SOCIUS Corp. website")
        window.location.href = "https://sociuscorp.com/";
    }
}

function validateForm() {
    let email = document.getElementById("idEmail");
    let password = document.getElementById("idPassword");
    let birthdate = document.getElementById("idDate");
    let prefix = document.getElementById("idPrefix");
    let phone = document.getElementById("idPhone");
    let city = document.getElementById("idCity");
    let gender = document.querySelector('input[name="gender"]:checked');

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        alert("Email is not valid");
        return false;
    }

    if (password.value.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }

    if (birthdate.value.length === 0) {
        alert("Birthdate is required");
        return false;
    }

    if (prefix.value === "0") {
        alert("Select a prefix");
        return false;
    }

    if (phone.value.length < 1) {
        alert("Phone number is required");
        return false;
    }

    if (city.value === "0") {
        alert("Select a city");
        return false;
    }

    if (!gender) {
        alert("Select a gender");
        return false;
    }

    return true;
}