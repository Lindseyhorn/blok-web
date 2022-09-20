// JavaScript Document
console.log("hi");

/* bron : css tips van de docent*/

var darkMode

darkMode = document.querySelector('button');
deBody= document.querySelector('body');

darkMode.addEventListener("click", verander);

function verander() {
    deBody.classList.toggle('dark_mode');
}