document.getElementById("submitButton").addEventListener("click", function () {
    const nameValid = validateField("firstName", "First name is required");
    const lastNameValid = validateField("lastName", "Last name is required");

    let cityHasValue = validateField("city", "City is required");
    let emailHasValue = validateField("email", "Email is required");
    let professionHasValue = validateField(
        "profession",
        "Profession is required"
    );
    let phoneHasValue = validatePhone("phone", "Phone is required");
    let educationHasValue = validateEducation(
        "educ",
        "Education title is required"
    );
    let jobHasValue = validateJobName("job_n", "Job name is required");

    if (emailHasValue) {
        emailHasValue = validateEmail();
    }

    if (cityHasValue) {
        cityHasValue = validateCity();
    }
    if (professionHasValue) {
        professionHasValue = validateProfession();
    }
    if (phoneHasValue) {
        phoneHasValue = validatePhone();
    }
    if (educationHasValue) {
        educationHasValue = validateEducation();
    }
    if (jobHasValue) {
        jobHasValue = validateJobName();
    }

    const allFieldsValid =
        nameValid &&
        lastNameValid &&
        cityHasValue &&
        emailHasValue &&
        professionHasValue &&
        phoneHasValue &&
        educationHasValue &&
        jobHasValue;
    if (allFieldsValid) {
        showValues();
    } else {
        hideValues();
    }
});

function showValues() {
    ["firstName", "lastName", "email", "city", "phone", "profession"].forEach(
        (id) => {
            const emelent = document.getElementById(id);
            const valueElement = document.getElementById(`${id}Display`);
            valueElement.innerHTML = `${id}: ${emelent.value};`;
        }
    );
}

function hideValues() {
    ["firstName", "lastName", "email", "city", "phone", "profession"].forEach(
        (id) => {
            const valueElement = document.getElementById(`${id}Display`);
            valueElement.innerHTML = null;
        }
    );
}

function validateField(id, errorMessage) {
    const fieldInput = document.getElementById(id);
    const label = fieldInput.parentElement.children.item(0);
    const error = document.getElementById(`${id}Error`);
    const value = fieldInput.value;

    if (value === null || value === "" || value.trim() === "") {
        error.innerHTML = errorMessage;
        error.style.display = "block";
        label.classList.add("error");

        return false;
    } else {
        error.innerHTML = "";
        error.style.display = "none";
        label.classList.remove("error");
    }

    return true;
}

function validateEmail() {
    const emailInput = document.getElementById("email");
    const label = emailInput.parentElement.children.item(0);
    const error = document.getElementById(`emailError`);
    const value = emailInput.value;

    if (
        !value.includes("@") ||
        !value.includes(".") ||
        value.lastIndexOf(".") < value.lastIndexOf("@")
    ) {
        error.innerHTML = "Email is invalid";
        error.style.display = "block";
        label.classList.add("error");
        return false;
    } else {
        error.innerHTML = "";
        error.style.display = "none";
        label.classList.remove("error");
    }

    return true;
}

function validateCity() {
    const cityInput = document.getElementById("city");
    const label = cityInput.parentElement.children.item(0);
    const error = document.getElementById(`cityError`);
    const value = cityInput.value;

    if (value.length < 4) {
        error.innerHTML = "City length must be greater then 3";
        error.style.display = "block";
        label.classList.add("error");
        return false;
    } else {
        error.innerHTML = "";
        error.style.display = "none";
        label.classList.remove("error");
    }

    return true;
}

function validateProfession() {
    const professionInput = document.getElementById("profession");
    const label = professionInput.parentElement.children.item(0);
    const error = document.getElementById(`professionError`);
    const value = professionInput.value;

    if (value.length < 1) {
        error.innerHTML = "Profession length must be greater then 1";
        error.style.display = "block";
        label.classList.add("error");
        return false;
    } else {
        error.innerHTML = "";
        error.style.display = "none";
        label.classList.remove("error");
    }

    return true;
}

function validatePhone() {
    const phoneInput = document.getElementById("phone");
    const label = phoneInput.parentElement.children.item(0);
    const error = document.getElementById(`phoneError`);
    const value = phoneInput.value;

    if (!value.includes("+373") || value.length < 8) {
        error.innerHTML = "Phone is invalid";
        error.style.display = "block";
        label.classList.add("error");
        return false;
    } else {
        error.innerHTML = "";
        error.style.display = "none";
        label.classList.remove("error");
    }

    return true;
}

function validateEducation() {
    const educInput = document.getElementById("educ");
    const label = educInput.parentElement.children.item(0);
    const error = document.getElementById(`educError`);
    const value = educInput.value;

    if (value.length < 1) {
        error.innerHTML = "Education ttle must be greater then 1";
        error.style.display = "block";
        label.classList.add("error");
        return false;
    } else {
        error.innerHTML = "";
        error.style.display = "none";
        label.classList.remove("error");
    }

    return true;
}
function validateJobName() {
    const job_nInput = document.getElementById("job_n");
    const label = job_nInput.parentElement.children.item(0);
    const error = document.getElementById(`job_nError`);
    const value = job_nInput.value;

    if (value.length < 1) {
        error.innerHTML = "Job name must be greater then 1";
        error.style.display = "block";
        label.classList.add("error");
        return false;
    } else {
        error.innerHTML = "";
        error.style.display = "none";
        label.classList.remove("error");
    }

    return true;
}

const btn = document.getElementById("btn1");

btn.addEventListener("click", () => {
    const form = document.getElementById("edu");

    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
});

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
    const form = document.getElementById("jobs");

    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
});
