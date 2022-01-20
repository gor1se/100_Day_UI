'use strict';

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const Email = document.getElementById('Email');
let firstNameCorrect = false;
let lastNameCorrect = false;
let emailCorrect = false;

firstName.addEventListener('change',() => {
    if(firstName.value.length >= 2){
        firstName.classList.add("green");
        firstName.classList.remove("red");
        firstNameCorrect = true;
    } else {
        firstName.classList.add("red");
        firstName.classList.remove("green");
        firstNameCorrect = false;
    }
    checkDisabled();
});

lastName.addEventListener('change',() => {
    if(lastName.value.length >= 2){
        lastName.classList.add("green");
        lastName.classList.remove("red");
        lastNameCorrect = true;
    } else {
        lastName.classList.add("red");
        lastName.classList.remove("green");
        lastNameCorrect = false;
    }
    checkDisabled();
});

Email.addEventListener('change',() => {
    if(Email.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        Email.classList.add("green");
        Email.classList.remove("red");
        emailCorrect = true;
    } else {
        Email.classList.add("red");
        Email.classList.remove("green");
        emailCorrect = false;
    }
    checkDisabled();
});

const checkDisabled = () => {
    if(firstNameCorrect && lastNameCorrect && emailCorrect){
        document.getElementById('btn-submit').disabled = false;
        document.getElementById('btn-submit').classList.remove('disabled');
    } else {
        document.getElementById('btn-submit').disabled = true;
        document.getElementById('btn-submit').classList.add('disabled');
    }
}