"use strict"

window.addEventListener('load', function() {


let premierfb = document.getElementById("premierfb");
let secondfb = document.getElementById("secondfb");
let premierinsta = document.getElementById("premierinsta");
let secondinsta = document.getElementById("secondinsta");
let premiertwitt = document.getElementById("premiertwitt");
let secondtwitt = document.getElementById("secondtwitt");
let premierytb = document.getElementById("premierytb");
let secondytb = document.getElementById("secondytb");


let premierfbbouton = document.getElementById("premierfbbouton");
let secondfbbouton = document.getElementById("secondfbbouton");

let premierinstabouton = document.getElementById("premierinstabouton");
let secondinstabouton = document.getElementById("secondinstabouton");
let premiertwittbouton = document.getElementById("premiertwittbouton");
let secondtwittbouton = document.getElementById("secondtwittbouton");

let premierytbbouton = document.getElementById("premierytbbouton");
let secondytbbouton = document.getElementById("secondytbbouton");




premierfbbouton.addEventListener("click", function(){
premierfbbouton.classList.add("cache");
premierfb.classList.remove("cache");
secondfbbouton.classList.remove("cache");
});


secondfbbouton.addEventListener("click", function(){
secondfbbouton.classList.add("cache");
secondfb.classList.remove("cache");
});

premierinstabouton.addEventListener("click", function(){
premierinstabouton.classList.add("cache");
premierinsta.classList.remove("cache");
premierinsta.classList.add("actifflex");
secondinstabouton.classList.remove("cache");
});


secondinstabouton.addEventListener("click", function(){
secondinstabouton.classList.add("cache");
secondinsta.classList.remove("cache");
secondinsta.classList.add("actifflex");
});

premiertwittbouton.addEventListener("click", function(){
premiertwittbouton.classList.add("cache");
premiertwitt.classList.add("actifflex");
premiertwitt.classList.remove("cache");
secondtwittbouton.classList.remove("cache");
});


secondtwittbouton.addEventListener("click", function(){
secondtwittbouton.classList.add("cache");
secondtwitt.classList.remove("cache");
secondtwitt.classList.add("actifflex");
});

premierytbbouton.addEventListener("click", function(){
premierytbbouton.classList.add("cache");
premierytb.classList.remove("cache");
secondytbbouton.classList.remove("cache");	
});

secondytbbouton.addEventListener("click", function(){
secondytbbouton.classList.add("cache");
secondytb.classList.remove("cache");
});
});