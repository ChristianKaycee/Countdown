// Elements where you want to display the countdown
let dayBox = document.querySelector(".day-box");
let hrsBox = document.querySelector(".hrs-box");
let minBox = document.querySelector(".min-box");
let secBox = document.querySelector(".sec-box");

// Correct event date format (MM/DD/YYYY or YYYY-MM-DD)
let eventDate = new Date("2025-09-20T00:48:19");

let updateTime = () => {
    let dateNow = new Date().getTime(); // Current time in milliseconds
    let timeLeft = eventDate - dateNow; // Difference in milliseconds

    if (timeLeft > 0) {
        // Time calculations
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Update the HTML elements with the calculated time
        dayBox.innerHTML = days;
        hrsBox.innerHTML = hours;
        minBox.innerHTML = minutes;
        secBox.innerHTML = seconds;
    } else {
        // Event has already passed or is now
        dayBox.innerHTML = 0;
        hrsBox.innerHTML = 0;
        minBox.innerHTML = 0;
        secBox.innerHTML = 0;
    }
};

// Call the function every second to update the countdown
setInterval(updateTime, 1000);
