const alertSound = new Audio('alarm.mp3'); // sound alert file
const targetDate = new Date('2026-12-31T23:59:59'); // New Year's Eve 2026

function updateCountdown() {
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours = String(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((difference % (1000 * 60)) / 1000)).padStart(2, '0');

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (difference < 0) {
        clearInterval(interval);
        document.getElementById("timer").innerText = "The event has started!";
        alertSound.play(); // play sound when countdown ends
    }
}

const interval = setInterval(updateCountdown, 1000);
