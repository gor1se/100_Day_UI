"use strict";

document.addEventListener('click', (e) => {
    let element = e.target;
    if(element.classList.contains('btn-org')){
        element.classList.add('animation-org')
        setTimeout(()=>{
            element.classList.remove('animation-org')
        }, 100);
    }
    if(element.classList.contains('btn-dgr')){
        element.classList.add('animation-dgr')
        setTimeout(()=>{
            element.classList.remove('animation-dgr')
        }, 100);
    }
    if(element.classList.contains('btn-lgr')){
        element.classList.add('animation-lgr')
        setTimeout(()=>{
            element.classList.remove('animation-lgr')
        }, 100);
    }
})