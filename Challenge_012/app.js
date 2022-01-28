"use strict";

const addItems = document.querySelectorAll(".add-item");
const removeItems = document.querySelectorAll(".remove-item");
const addToCart = document.querySelectorAll(".add-to-cart");
const footerText = document.querySelector(".footer-text");

addItems.forEach(add => {
    add.addEventListener("click", event => {
        const x = event.currentTarget.previousElementSibling;
        if (x.value === "") {
            x.value = "1";
        } else {
            x.value = Number.parseInt(x.value, 10) + 1;
        }
        x.classList.add("black");
        x.previousElementSibling.classList.remove("not-possible");
    });
});

removeItems.forEach(remove => {
    remove.addEventListener("click", event => {
        const x = event.currentTarget.nextElementSibling;
        if (Number.parseInt(x.value, 10) > 0) {
            x.value = Number.parseInt(x.value, 10) - 1;
            console.log(x.value == "0");
            if (x.value == "0") {
                x.classList.remove("black");
                x.previousElementSibling.classList.add("not-possible");
            }
            console.log(x.classList);
        }
    });
});

addToCart.forEach(addToCart => {
    addToCart.addEventListener("click", event => {
        const x = event.currentTarget.previousElementSibling.childNodes[3];
        x.value = "";
        event.currentTarget.previousElementSibling.childNodes[1].classList.add(
            "not-possible"
        );
        x.classList.remove("black");
    });
});

footerText.textContent = "© FoodAndMore " + new Date().getFullYear();
