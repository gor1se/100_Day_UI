"use strict";

const popUp = document.querySelector(".pop-up");
const btn = document.querySelectorAll(".btn");

const changeView = () => {
    setTimeout(() => {
        popUp.classList.remove("hidden");
    }, 1500);
};

changeView();

btn.forEach(bt => {
    bt.addEventListener("click", () => {
        popUp.classList.add("hidden");
    });
});
