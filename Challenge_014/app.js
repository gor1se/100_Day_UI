const timer = document.querySelector(".timer");
const pause = document.querySelector(".btn-pause");
const start = document.querySelector(".btn-start");
const timerBtn = document.querySelectorAll(".btn-timer");
const form = document.querySelector(".custom-timer");
const icon = document.querySelector(".icon");

let running = false;

start.addEventListener("click", () => {
    if (timer.textContent !== "00:00:00") {
        start.setAttribute("disabled", "disabled");
        pause.removeAttribute("disabled");
        running = true;
    }
});

pause.addEventListener("click", () => {
    pause.setAttribute("disabled", "disabled");
    start.removeAttribute("disabled");
    running = false;
});

setInterval(() => {
    if (running) {
        minusSecond();
    }
}, 1000);

const minusSecond = () => {
    let time = timer.textContent;
    const ary = time.split(":");
    let hours = Number.parseInt(ary[0], 10);
    let minutes = Number.parseInt(ary[1], 10);
    let seconds = Number.parseInt(ary[2], 10);

    let newText = "";
    if (seconds !== 0) {
        hours = hours;
        minutes = minutes;
        seconds = Number.parseInt(seconds, 10) - 1;
    } else if (minutes !== 0) {
        hours = hours;
        minutes = minutes - 1;
        seconds = 59;
    } else if (hours !== 0) {
        hours = hours - 1;
        minutes = 59;
        seconds = 59;
    } else {
        running = false;
    }
    if (seconds <= 9) {
        seconds = "0" + seconds;
    }
    if (minutes <= 9) {
        minutes = "0" + minutes;
    }
    if (hours <= 9) {
        hours = "0" + hours;
    }
    timer.textContent = `${hours}:${minutes}:${seconds}`;
};

timerBtn.forEach(btn => {
    btn.addEventListener("click", event => {
        timer.textContent = event.currentTarget.dataset.timer;
    });
});

icon.addEventListener("click", () => {
    if (
        Number.parseInt(form.childNodes[1].value, 10) < 0 ||
        Number.parseInt(form.childNodes[1].value, 10) > 99
    ) {
        timer.textContent = `00:00:00`;
        form.childNodes[1].value = "";
        return false;
    }
    if (
        Number.parseInt(form.childNodes[3].value, 10) < 0 ||
        Number.parseInt(form.childNodes[3].value, 10) > 59
    ) {
        timer.textContent = `00:00:00`;
        form.childNodes[3].value = "";
        return false;
    }
    if (
        Number.parseInt(form.childNodes[5].value, 10) < 0 ||
        Number.parseInt(form.childNodes[5].value, 10) > 59
    ) {
        timer.textContent = `00:00:00`;
        form.childNodes[5].value = "";
        return false;
    }
    timer.textContent = ``;
    let hours;
    if (form.childNodes[1].value == "") {
        hours = 0;
    } else {
        hours = Number.parseInt(form.childNodes[1].value, 10);
    }
    if (hours <= 9) {
        hours = "0" + hours;
    }
    let minutes;
    if (form.childNodes[3].value == "") {
        minutes = 0;
    } else {
        minutes = Number.parseInt(form.childNodes[3].value, 10);
    }
    if (minutes <= 9) {
        minutes = "0" + minutes;
    }
    let seconds;
    if (form.childNodes[5].value == "") {
        seconds = 0;
    } else {
        seconds = Number.parseInt(form.childNodes[5].value, 10);
    }
    if (seconds <= 9) {
        seconds = "0" + seconds;
    }
    timer.textContent = `${hours}:${minutes}:${seconds}`;
});
