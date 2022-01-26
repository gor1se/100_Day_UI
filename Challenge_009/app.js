"use strict";

//Image
const img = document.querySelector(".cover-img");

img.addEventListener("mouseover", () => {
    img.classList.remove("img-smaller");
    img.classList.add("img-bigger");
});

img.addEventListener("mouseleave", () => {
    img.classList.remove("img-bigger");
    img.classList.add("img-smaller");
});

// Play Button
const playButton = document.querySelector(".btn-play-top");
const playButtonItem = document.querySelector(".btn-play");

playButton.addEventListener("click", () => {
    if (playButtonItem.getAttribute("src") === "./img/play.png") {
        playButtonItem.setAttribute("src", "./img/pause.png");
    } else {
        playButtonItem.setAttribute("src", "./img/play.png");
    }
});
