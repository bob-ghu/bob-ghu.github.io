/**
* Author: Siew Yat Fei - 104841067
* Target: index.html, jobs.html, apply.html, about.html, enhancements.html, enhancements2.html
* Purpose: Add enhancements to all web pages using JavaScript
* Created: 12/10/2023
* Last updated: 15/10/2023
* Credits: Assignment Part 2 Instruction PDF from COS10011 subject on Canvas
*/

"use strict"; // Prevents creation of global variables in functions

function underlineNavigation (location) { 
    switch (location) { // Determines which navigation text to underline
        case "index":
            // Gets element to underline by its ID
            const indexUnderline = document.getElementById("index-nav");
            // "text-decoration" CSS property underlines the text
            indexUnderline.style.textDecoration = "underline";
            break;
        case "jobs":
            const jobsUnderline = document.getElementById("jobs-nav");
            jobsUnderline.style.textDecoration = "underline";
            break;
        case "apply":
            const applyUnderline = document.getElementById("apply-nav");
            applyUnderline.style.textDecoration = "underline";
            break;
        case "about":
            const aboutUnderline = document.getElementById("about-nav");
            aboutUnderline.style.textDecoration = "underline";
            break;
        case "enhancements":
            const enhancementsUnderline = document.getElementById("enhancements-nav");
            enhancementsUnderline.style.textDecoration = "underline";
            break;
        case "enhancements2":
            const enhancements2Underline = document.getElementById("enhancements2-nav");
            enhancements2Underline.style.textDecoration = "underline";
            break;
    }
}

function removeJob() {
    // Get elements by its ID
    const usCLicked = document.getElementById("usability-specialist-clicked");
    const wdCLicked = document.getElementById("web-developer-clicked");

    usCLicked.addEventListener("click", function() { // Registers a click event on the image
        // Reference the section by its ID
        const usDetails = document.getElementById("usability-specialist");

        // Change the opacity of the section
        usDetails.style.opacity = 1;

        // Change the opacity of all child elements within the section
        const usChildElements = usDetails.querySelectorAll("*"); // Selects all child elements of usDetails
        usChildElements.forEach(function(element) {
        element.style.opacity = 1; 
        });

        const wdDetails = document.getElementById("web-developer");

        wdDetails.style.opacity = 0.6; 

        const wdChildElements = wdDetails.querySelectorAll("*");
        wdChildElements.forEach(function(element) {
        element.style.opacity = 0.6;
        });
    });

    wdCLicked.addEventListener("click", function() {
 
        const wdDetails = document.getElementById("web-developer");

        wdDetails.style.opacity = 1; 

        const wdChildElements = wdDetails.querySelectorAll("*");
        wdChildElements.forEach(function(element) {
        element.style.opacity = 1; 
        });

        const usDetails = document.getElementById("usability-specialist");

        usDetails.style.opacity = 0.6; 

        const usChildElements = usDetails.querySelectorAll("*");
        usChildElements.forEach(function(element) {
        element.style.opacity = 0.6; 
        });
    });
}

function formTimer() {
    let seconds = 301; // Set initial time to 5 minutes (300 seconds)

    const minutesElement = document.getElementById("minutes"); // Get elements to change its content
    const secondsElement = document.getElementById("seconds");
    
    setInterval(updateTimer, 1000); // Set interval to every 1 second
   
    function updateTimer() {
        seconds--;
        if (seconds === 0) { // Timer runs out
            redirectToHome();
        }
        updateDisplay(); // Updates timer display every second
    }

    function redirectToHome() {
        window.location.href = "index.html"; // Redirected to Home Page if timer runs out before submission
    }

    function updateDisplay() {
        let minutes = Math.floor(seconds / 60); // Takes only the integer part of the value
        let remainingSeconds = seconds % 60; // Takes the remainder of the value
        minutesElement.textContent = String(minutes).padStart(2, "0"); // Pads the rest of the value with 0 until 2 digits and displays the text
        secondsElement.textContent = String(remainingSeconds).padStart(2, "0");
    }
}

function itin() {

    if (document.title == 'HyperTech - Home') // If page title matches, it returns ture
    {
        underlineNavigation("index");
    }

    if (document.title == 'HyperTech - Jobs')
    {
        underlineNavigation("jobs");
        removeJob();
    }

    if (document.title == 'HyperTech - Applications')
    {
        underlineNavigation("apply");
        formTimer();
    }

    if (document.title == 'HyperTech - About Me')
    {
        underlineNavigation("about");
    }

    if (document.title == 'HyperTech - Enhancements')
    {
        underlineNavigation("enhancements");
    }

    if (document.title == 'HyperTech - JavaScript Enhancements')
    {
        underlineNavigation("enhancements2");
    }
}

window.addEventListener("load", function() { 
    itin();
});