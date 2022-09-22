// JavaScript Document
console.log("hi");

/* bron : css tips van de docent*/


/* darkmode*/

var darkMode

darkMode = document.querySelector('button');
deBody= document.querySelector('body');

darkMode.addEventListener("click", verander);

function verander() {
    deBody.classList.toggle('dark_mode');
}



/* halloween thema tevoorschijn na op knop drukken*/

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



/* halloween thema*/

halloween = document.querySelector('.pumpkinMode');
deBody= document.querySelector('body');

halloween.addEventListener("click", verander);

function verander() {
    deBody.classList.toggle('halloween_mode');
}


// var beweeg = document.querySelector("div[aria-label = 'beweeg']");
// beweeg.addEventListener("click", heenEnWeer);
// function heenEnWeer() {
//   beweeg.classList.toggle("beweeg");
// }


