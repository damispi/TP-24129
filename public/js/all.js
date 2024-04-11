const startCountdown = (countDownDate, elementId) => {
    const intervalSetTime = setInterval(() => {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        if (distance < 0) {
            clearInterval(intervalSetTime);
            document.getElementById(elementId).innerHTML = "EXPIRED";
            return;
        }
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let countdownText = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        document.getElementById(elementId).innerHTML = countdownText;
    }, 1000);
};
const countDownDate = new Date("apr 29, 2024 15:37:25").getTime();
startCountdown(countDownDate, "demo");
