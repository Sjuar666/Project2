document.addEventListener("DOMContentLoaded", function () {
    const timeInput = document.getElementById("timeInput");
    const startTimerBtn = document.getElementById("startTimerBtn");
    const timerDisplay = document.getElementById("timerDisplay");

    let timer; // Holds the reference to the timer interval

    startTimerBtn.addEventListener("click", function () {
        let time = parseInt(timeInput.value); // Get the time in seconds from the input

        // If there's an existing timer, clear it before starting a new one
        if (timer) {
            clearInterval(timer);
        }

        if (isNaN(time) || time <= 0) {
            alert("Please enter a valid number of seconds.");
            return;
        }

        // Function to update the timer display every second
        timer = setInterval(function () {
            if (time <= 0) {
                clearInterval(timer);
                timerDisplay.textContent = "Time's up!";
            } else {
                time--;
                timerDisplay.textContent = formatTime(time);
            }
        }, 1000);
    });

    // Function to format the time into MM:SS format
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }
});
