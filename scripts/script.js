// JavaScript Document
console.log("hi");

/* bron : css tips van de docent*/


/* halloween thema tevoorschijn na op knop drukken beetje hulp studentassistent*/

var pumpkinKnop = document.querySelector('.pumpkinMode');
console.log(pumpkinKnop);
var pumpkinPlaatjes = document.querySelectorAll('.pumpkin');


pumpkinKnop.addEventListener('click', function () {
    pumpkinPlaatjes.forEach(pumpkin => {
        console.log(pumpkin)
        
        pumpkin.classList.toggle('show')
    });
    console.log('clicked')
})



/* halloween thema*/ /* bron : studentassistent*/

var rootElement = document.querySelector(":root");

var halloween = document.querySelector('.pumpkinMode');
var deBody= document.querySelector('body');
var beweeg = document.querySelector("main > div");

halloween.addEventListener("click", verander);

function verander() {
    rootElement.classList.toggle("halloween_mode");
    beweeg.classList.toggle("dansje");
}

/* darkmode*/
var darkMode = document.querySelector('button');
darkMode.addEventListener("click", darkModeToggle);

function darkModeToggle() {
    rootElement.classList.toggle('dark_mode');
}











