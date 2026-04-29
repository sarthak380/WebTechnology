document.getElementById("myForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let prn = document.getElementById("prn").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();

    let nameError = document.getElementById("nameError");
    let prnError = document.getElementById("prnError");
    let emailError = document.getElementById("emailError");
    let mobileError = document.getElementById("mobileError");
    let successMessage = document.getElementById("successMessage");

    // Clear old messages
    nameError.innerHTML = "";
    prnError.innerHTML = "";
    emailError.innerHTML = "";
    mobileError.innerHTML = "";
    successMessage.innerHTML = "";

    let isValid = true;

    // Name validation (minimum 3 letters)
    if (name.length < 3) {
        nameError.innerHTML = " Invalid Name ";
        isValid = false;
    }

    // PRN validation (10 digits)
    if (!/^[0-9]{10}$/.test(prn)) {
        prnError.innerHTML = " PRN must be 10 digits ";
        isValid = false;
    }

    // Email validation
    if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
        emailError.innerHTML = " Invalid Email ";
        isValid = false;
    }

    // Mobile validation (10 digits)
    if (!/^[0-9]{10}$/.test(mobile)) {
        mobileError.innerHTML = " Mobile must be 10 digits ";
        isValid = false;
    }

    if (isValid) {
        successMessage.innerHTML = "Form submitted successfully!";
        document.getElementById("myForm").reset();
    }

});