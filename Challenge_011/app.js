"use strict";

const form = document.querySelector("#login-form");
const userName = document.querySelector("#user-name");
const userPassword = document.querySelector("#user-password");
const flashMessage = document.querySelector("#flash-message");
const flashText = document.querySelector("#flash-text");

const checkUserName = name => {
    return name === "admin";
};

const checkPassword = password => {
    return password === "admin";
};

form.addEventListener("submit", event => {
    event.preventDefault();
    if (!checkUserName(userName.value) || !checkPassword(userPassword.value)) {
        flashText.innerHTML =
            "<strong>Error: </strong>Username or password wrong. Please try again!";
        flashMessage.classList.add("flash-error");
        flashMessage.classList.remove(
            "flash-info",
            "flash-warning",
            "flash-success"
        );
    } else {
        flashText.innerHTML =
            "<strong>Success: </strong>Successfully loged in. Welcome!";
        flashMessage.classList.add("flash-success");
        flashMessage.classList.remove(
            "flash-error",
            "flash-warning",
            "flash-info"
        );
    }
    userName.value = "";
    userPassword.value = "";
});
