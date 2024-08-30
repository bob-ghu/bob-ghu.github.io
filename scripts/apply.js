/**
* Author: Siew Yat Fei - 104841067
* Target: jobs.html & apply.html 
* Purpose: Validating the form in apply.html & Transferring information from jobs.html to apply.html
* Created: 8/10/2023
* Last updated: 15/10/2023
* Credits: Assignment Part 2 Instruction PDF from COS10011 subject on Canvas
*/

"use strict"; // Prevents creation of global variables in functions

function validateJobReference(result) {
    const jobReference = document.getElementById("ref").value;
    const jobReferenceError = document.getElementById("ref-error");

    if (jobReference.trim() === "") { // Clears spaces
        jobReferenceError.innerHTML = "Please get your job reference number from the [Jobs] page.";
        document.getElementById("ref").style.borderColor = "red"; // Turns the input border red
        return false;
    }

    return result;
}

function validateFirstName(result) {
    const firstName = document.getElementById("fname").value;
    const firstNameError = document.getElementById("fname-error");
    
    if (firstName.trim() === "") {
        firstNameError.innerHTML = "Please enter your first name.";
        document.getElementById("fname").style.borderColor = "red";
        return false;
    }

    const firstNameFormat = new RegExp("^[a-zA-z ]+$"); // Set RegExp to validate name
    if (!firstName.match(firstNameFormat)) {
        firstNameError.innerHTML = "Only letters{A-Z} and spaces{ } are accepted.";
        document.getElementById("fname").style.borderColor = "red";
        result = false;
    }

    return result;
}

function validateLastName(result) {
    const lastName = document.getElementById("lname").value;
    const lastNameError = document.getElementById("lname-error");
    
    if (lastName.trim() === "") {
        lastNameError.innerHTML = "Please enter your last name.";
        document.getElementById("lname").style.borderColor = "red";
        return false;
    }
    
    const lastNameFormat = new RegExp("^[a-zA-z ]+$"); 
    if (!lastName.match(lastNameFormat)) {
        lastNameError.innerHTML = "Only letters{A-Z} and spaces{ } are accepted.";
        document.getElementById("lname").style.borderColor = "red";
        result = false;
    }

    return result;
}

function validateAge(result) {
    // Gets the selected date as a string (format: "YYYY-MM-DD")
    const userDOB = document.getElementById("dob").value;

    const dobError = document.getElementById("dob-error");
    if (userDOB == "") {
        dobError.innerHTML = "Please select your date of birth.";
        document.getElementById("dob").style.borderColor = "red";
        return false;
    }

    // Split the selected date into an array of parts (year, month, day)
    const dateSplit = userDOB.split("-");

    // Extract the individual values (year, month, day)
    const userYear = dateSplit[0];
    const userMonth = dateSplit[1];
    const userDay = dateSplit[2];

    const currentDate = new Date();

    const currentYear = currentDate.getFullYear(); // Get the current year
    const currentMonth = currentDate.getMonth() + 1; // Get the current month
    const currentDay = currentDate.getDate(); // Get the day of the month
    
    if (currentYear - userYear < 15) {
        dobError.innerHTML = "Your age can not be younger than 15.";
        document.getElementById("dob").style.borderColor = "red";
        result = false;
    }

    if (currentYear - userYear == 15) {
        if (currentMonth < userMonth) {
            dobError.innerHTML = "Your age can not be younger than 15.";
            document.getElementById("dob").style.borderColor = "red";
            result = false;
        }

        else if (currentMonth == userMonth) {
            if (currentDay < userDay) {
                dobError.innerHTML = "Your age can not be younger than 15.";
                document.getElementById("dob").style.borderColor = "red";
                result = false;
            }
        }
        else {}
    }

    if (currentYear - userYear > 80) {
        dobError.innerHTML = "Your age can not be older than 80.";
        document.getElementById("dob").style.borderColor = "red";
        result = false;
    }

    if (currentYear - userYear == 80) {
        if (currentMonth > userMonth) {
            dobError.innerHTML = "Your age can not be older than 80.";
            document.getElementById("dob").style.borderColor = "red";
            result = false;
        }

        else if (currentMonth == userMonth) {
            if (currentDay > userDay) {
                dobError.innerHTML = "Your age can not be older than 80.";
                document.getElementById("dob").style.borderColor = "red";
                result = false;
            }
        }
        else {}
    }

    return result;
}

function validateGender(result) {
    const genderMale = document.getElementById("male");
    const genderFemale = document.getElementById("female");

    const genderError = document.getElementById("gender-error");
    const genderClass = document.getElementsByClassName("gender");
    const genderFieldset = genderClass[0]; // Takes the first element with the gender class

    if (!genderMale.checked && !genderFemale.checked) { // True if both are unchecked
        genderError.innerHTML = "Please select your gender.";
        genderFieldset.style.borderColor = "red";
        result = false;
    }

    return result;
}

function validateStreet(result) {
    const street = document.getElementById("street").value;

    const streetError = document.getElementById("street-error");
    if (street.trim() === "") {
        streetError.innerHTML = "Please enter your street address.";
        document.getElementById("street").style.borderColor = "red";
        result = false;
    }

    return result;
}

function validateSuburb(result) {
    const suburb = document.getElementById("suburb").value;

    const suburbError = document.getElementById("suburb-error");
    if (suburb.trim() === "") {
        suburbError.innerHTML = "Please enter your suburb/town.";
        document.getElementById("suburb").style.borderColor = "red";
        result = false;
    }

    return result;
}

function validateStateAndPostcode(result) {

    const state = document.getElementById("state").value;
    const postcode = document.getElementById("postcode").value;

    function postcodeMatch(n1, n2) { // Checks the first digit of the postcode
        if (!n2) { // Validates only a single number
            const postcodeFormat = new RegExp("^[" + n1 + "]\\d{3}");
            if (!postcode.match(postcodeFormat)) {
                return true;
            }
        } 
        
        else { // Validates 2 numbers
            const postcodeFormat = new RegExp("^[" + n1 + "|" + n2 + "]\\d{3}");
            if (!postcode.match(postcodeFormat)) {
                return true;
            }
        }

        return false;
    }

    const stateError = document.getElementById("state-error");
    if (state === "") {
        stateError.innerHTML = "Please pick a state.";
        document.getElementById("state").style.borderColor = "red";
        result = false;
    }

    const postcodeError = document.getElementById("postcode-error");
    if (postcode.trim() === "") {
        postcodeError.innerHTML = "Please enter your state's postcode.";
        document.getElementById("postcode").style.borderColor = "red";
        return false;
    }

    switch (state) { 
        case "Victoria":
            if (postcodeMatch(3, 8)) {
                postcodeError.innerHTML = "The postcode for Victoria always starts with 3 or 8.";
                document.getElementById("postcode").style.borderColor = "red";
                result = false;
            }
            break;
        case "New South Wales":
            if (postcodeMatch(1, 2)) {
                postcodeError.innerHTML = "The postcode for New South Wales always starts with 1 or 2.";
                document.getElementById("postcode").style.borderColor = "red";
                result = false;
            }
            break;
        case "Queensland":
            if (postcodeMatch(4, 9)) {
                postcodeError.innerHTML = "The postcode for Queensland always starts with 4 or 9.";
                document.getElementById("postcode").style.borderColor = "red";
                result = false;
                }
                break;
        case "Western Australia":
            if (postcodeMatch(6)) {
                postcodeError.innerHTML = "The postcode for Western Australia always starts with 6.";
                document.getElementById("postcode").style.borderColor = "red";
                result = false;
            }
            break;
        case "South Australia":
            if (postcodeMatch(5)) {
                postcodeError.innerHTML = "The postcode for South Australia always starts with 5.";
                document.getElementById("postcode").style.borderColor = "red";
                result = false;
            }
            break;
        case "Tasmania":
            if (postcodeMatch(7)) {
                postcodeError.innerHTML = "The postcode for Tasmania always starts with 7.";
                document.getElementById("postcode").style.borderColor = "red";
                result = false;
            }
            break;
        case "Nothern Territory":
        case "Australian Capital Territory":
            if (postcodeMatch(0)) {
                postcodeError.innerHTML = "The postcode for" + state + "always starts with 0.";
                document.getElementById("postcode").style.borderColor = "red";
                result = false;
            }
            break;
        default:
            stateError.innerHTML = "Please select your state.";
            document.getElementById("state").style.borderColor = "red";
            result = false;
    }

    return result;
}

function validateEmail(result) {
    const email = document.getElementById("email").value;

    const emailError = document.getElementById("email-error");
    if (email.trim() === "") {
        emailError.innerHTML = "Please enter your email.";
        document.getElementById("email").style.borderColor = "";
        return false;
    }

    const emailFormat = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z.]+$"); // Example format: [someone@mail.com]
    if (!email.match(emailFormat)) {
        emailError.innerHTML = "Invalid email format.";
        document.getElementById("email").style.borderColor = "red";
        result = false;
    }

    return result;
}

function validatePhoneNumber(result) {
    const phonenum = document.getElementById("phonenum").value;

    const phoneNumError = document.getElementById("phonenum-error");
    if (phonenum.trim() === "") {
        phoneNumError.innerHTML = "Please enter your phone number.";
        document.getElementById("phonenum").style.borderColor = "red";
        return false;
    }
    
    const phoneNumFormat = new RegExp("^[0-9 ]{8,12}$");
    if (!phonenum.match(phoneNumFormat)) {
        phoneNumError.innerHTML = "Only numbers{0-9} and spaces{ } are accepted.\nExample format: [60 123456789]";
        document.getElementById("phonenum").style.borderColor = "red";
        result = false;
    }

    return result;
}

function validateSkills(result) {
    const problemSolve = document.getElementById("problem-solve");
    const communication = document.getElementById("communication");
    const ux_ui_design = document.getElementById("ux-ui-design");
    const workIndependently = document.getElementById("work-independently");
    const otherSkills = document.getElementById("otherskills");

    const skillsClass = document.getElementsByClassName("skills");
    const skillsFieldset = skillsClass[0];

    const skillsError = document.getElementById("skills-error"); // At least one skill must be checked
    if (!problemSolve.checked && !communication.checked && !ux_ui_design.checked && !workIndependently.checked && !otherSkills.checked) { 
        skillsError.innerHTML = "You need to check at least one skill";
        skillsFieldset.style.borderColor = "red";
        return false;
    }

    const otherSkillsDesc = document.getElementById("otherskillsdesc").value;
    const otherSkillsError = document.getElementById("otherskills-error");
    if (otherSkills.checked) { // If checked, description can't be empty
        if (otherSkillsDesc.trim() === "") {
            otherSkillsError.innerHTML = "You have checked [Other skills]. It can not be empty.";
            document.getElementById("otherskillsdesc").style.borderColor = "red";
            result = false;
        }    
    }

    return result;
}

function validate() {
    clearErrorMessage(); // Refreshes errors

    let result = true;  // Assumes no errors

    result = validateJobReference(result);
    result = validateFirstName(result);
    result = validateLastName(result);
    result = validateAge(result);
    result = validateGender(result);
    result = validateStreet(result);
    result = validateSuburb(result);
    result = validateStateAndPostcode(result);
    result = validateEmail(result);
    result = validatePhoneNumber(result);
    result = validateSkills(result);  

    if (result) {
        storeSession();
    }

    return result;
}

function clearErrorMessage() { 
    const errorMessage = document.getElementsByClassName("error-message");
    const inputBorderColor = document.querySelectorAll('input');
    const selectBorderColor = document.querySelectorAll('select');
    const fieldsetBorderColor = document.querySelectorAll('fieldset');
    
    for (let i = 0; i < errorMessage.length; i++) { // Goes through all elements with error-message ID and clears them
      errorMessage[i].innerHTML = "";
    }

    inputBorderColor.forEach(function(input) { 
        input.style.borderColor = "";
    });

    selectBorderColor.forEach(function(select) {
        select.style.borderColor = "";
    });

    fieldsetBorderColor.forEach(function(fieldset) {
        fieldset.style.borderColor = "";
    });
}

function applyLink() {
    localStorage.setItem("jobRefUS", "J8888"); // Save data to local storage
    localStorage.setItem("jobRefWD", "J2222");

    const applyUS = document.getElementById("applyus");
    const applyWD = document.getElementById("applywd");

    applyUS.addEventListener("click", function(event) { // Registers a click on the apply button
        localStorage.setItem("jobRef", "US");
    });

    applyWD.addEventListener("click", function(event) {
        localStorage.setItem("jobRef", "WD");
    });
}

function storeSession() { // Stores all values to session storage if submission successful

    sessionStorage.firstNameSession = document.getElementById("fname").value;
    sessionStorage.lastNameSession = document.getElementById("lname").value;
    sessionStorage.dobSession = document.getElementById("dob").value;

    if (document.getElementById("male").checked) {
        sessionStorage.genderSession = "male";
    }
    else {
        sessionStorage.genderSession = "female";
    }

    sessionStorage.streetSession = document.getElementById("street").value;
    sessionStorage.suburbSession = document.getElementById("suburb").value;
    sessionStorage.stateSession = document.getElementById("state").value;
    sessionStorage.postcodeSession = document.getElementById("postcode").value;
    sessionStorage.emailSession = document.getElementById("email").value;
    sessionStorage.phoneNumSession = document.getElementById("phonenum").value;

    if (document.getElementById("problem-solve").checked) {
        sessionStorage.problemSolveSession = "checked";
    }

    if (document.getElementById("communication").checked) {
        sessionStorage.communicationSession = "checked";
    }

    if (document.getElementById("ux-ui-design").checked) {
        sessionStorage.ux_ui_designSession = "checked";
    }

    if (document.getElementById("work-independently").checked) {
        sessionStorage.workIndependentlySession = "checked";
    }

    if (document.getElementById("otherskills").checked) {
        sessionStorage.otherSkillsSession = "checked";
        sessionStorage.otherSkillsDescSession = document.getElementById("otherskillsdesc").value;
    }
}

function preFillForm() { // Prefills form with session storage data

    document.getElementById("ref").readOnly = true;
    if (localStorage.getItem("jobRef") == "US") {
        const jobRefUS = localStorage.getItem("jobRefUS");
        document.getElementById("ref").value = jobRefUS;
    }
    if (localStorage.getItem("jobRef") == "WD") {
        const jobRefWD = localStorage.getItem("jobRefWD");
        document.getElementById("ref").value = jobRefWD;
    }

    if (sessionStorage.firstNameSession != undefined) { // Will not prefill if session storage has no value
        document.getElementById("fname").value = sessionStorage.firstNameSession;
        document.getElementById("lname").value = sessionStorage.lastNameSession;
        document.getElementById("dob").value = sessionStorage.dobSession;
    
        if (sessionStorage.genderSession === "male") {
            document.getElementById("male").checked = true;
        }
    
        else {
            document.getElementById("female").checked = true;
        }
    
        document.getElementById("street").value = sessionStorage.streetSession;
        document.getElementById("suburb").value = sessionStorage.suburbSession;
        document.getElementById("state").value = sessionStorage.stateSession;
        document.getElementById("postcode").value = sessionStorage.postcodeSession;
        document.getElementById("email").value = sessionStorage.emailSession;
        document.getElementById("phonenum").value = sessionStorage.phoneNumSession;
    
        if (sessionStorage.problemSolveSession === "checked") {
            document.getElementById("problem-solve").checked = true;
        }
    
        if (sessionStorage.communicationSession === "checked") {
            document.getElementById("communication").checked = true;
        }
    
        if (sessionStorage.ux_ui_designSession === "checked") {
            document.getElementById("ux-ui-design").checked = true;
        }
    
        if (sessionStorage.workIndependentlySession === "checked") {
            document.getElementById("work-independently").checked = true;
        }
    
        if (sessionStorage.otherSkillsSession === "checked") {
            document.getElementById("otherskills").checked = true;
            document.getElementById("otherskillsdesc").value = sessionStorage.otherSkillsDescSession;
        }
    }
}

function init() {
    
    if (document.title == 'HyperTech - Jobs') // Checks currently viewed page by its title
    {
        applyLink();
    }

    if (document.title == 'HyperTech - Applications')
    {
        preFillForm();
        const applyForm = document.getElementById("applyform");// Get ref to the HTML element
        applyForm.onsubmit = validate; // Register the event listener
        applyForm.onreset = clearErrorMessage; // Reset button clears all value in input boxes
    }
}

window.addEventListener("load", function() {
    init();
});