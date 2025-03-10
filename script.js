function validateForm() {
    let valid = true;

    // Reset previous error messages
    document.getElementById("firstNameError").textContent = "";
    document.getElementById("lastNameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("dobError").textContent = "";
    document.getElementById("ageError").textContent = "";
    document.getElementById("genderError").textContent = "";
    document.getElementById("phoneNumberError").textContent = "";
    document.getElementById("addressError").textContent = "";

    // First Name validation
    let firstName = document.getElementById("firstName").value;
    if (firstName.length < 4 || !/^[A-Za-z]+$/.test(firstName)) {
        document.getElementById("firstNameError").textContent = "First name must contain only alphabets and be at least 4 characters long.";
        valid = false;
    }

    // Last Name validation
    let lastName = document.getElementById("lastName").value;
    if (lastName.length < 1 || !/^[A-Za-z]+$/.test(lastName)) {
        document.getElementById("lastNameError").textContent = "Last name must contain only alphabets.";
        valid = false;
    }

    // Email validation
    let email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        valid = false;
    }

    // Date of Birth validation
    let dob = document.getElementById("dob").value;
    if (!dob) {
        document.getElementById("dobError").textContent = "Please enter a valid date of birth.";
        valid = false;
    }

    // Age validation
    let age = document.getElementById("age").value;
    if (age.length != 2 || !/^\d{2}$/.test(age)) {
        document.getElementById("ageError").textContent = "Age must be a 2-digit number.";
        valid = false;
    }

    // Gender validation
    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById("genderError").textContent = "Please select a gender.";
        valid = false;
    }

    // Phone Number validation
    let phoneNumber = document.getElementById("phoneNumber").value;
    if (phoneNumber.length !== 10 || !/^\d{10}$/.test(phoneNumber)) {
        document.getElementById("phoneNumberError").textContent = "Phone number must be 10 digits.";
        valid = false;
    }

    // Address validation
    let address = document.getElementById("address").value;
    if (!address) {
        document.getElementById("addressError").textContent = "Address cannot be empty.";
        valid = false;
    }

    if (valid) {
        let newEntry = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            dob: dob,
            age: age,
            gender: gender.value,
            phoneNumber: phoneNumber,
            address: address
        };

        let existingEntries = JSON.parse(localStorage.getItem("formEntries")) || [];
        existingEntries.push(newEntry);
        localStorage.setItem("formEntries", JSON.stringify(existingEntries));

        window.location.href = "submit.html";
    }
    return false;  // Prevent actual form submission
}
