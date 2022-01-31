"use strict";

const input = document.querySelector(".message-input");
const sendBtn = document.querySelector(".send-btn");

input.addEventListener("keyup", () => {
    if (input.value !== "") {
        sendBtn.classList.remove("hide");
    } else {
        sendBtn.classList.add("hide");
    }
});
