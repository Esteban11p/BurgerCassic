'use strict'

let combo1Element = document.getElementById("combo1"); 

const Combo1 = {

    nombre: "combo especial",
    precio: 30000,
    descripcion: "Combo de carne de res, unas papas y gaseosa", 

}

combo1Element.comboData = Combo1; 

let nombreDelCombo = combo1Element.comboData.nombre;

console.log(nombreDelCombo)


// Bloque 3

const botonBD = document.querySelector("#BotonBebidasD");
const botonBI = document.querySelector("#BotonBebidasI");

const contenedor3 = document.querySelector(".bloqueN3");

botonBD.addEventListener("click", () => {
    contenedor3.scrollLeft += 967;
})

botonBI.addEventListener("click", () => {
    contenedor3.scrollLeft -= 967;
})

// Bloque 2

const botonD = document.querySelector("#BotonHamburguesasD");
const botonI = document.querySelector("#BotonHamburguesasI");

const contenedor2 = document.querySelector(".bloqueN2");

botonD.addEventListener("click", () => {
    contenedor2.scrollLeft += 967;
})

botonI.addEventListener("click", () => {
    contenedor2.scrollLeft -= 967;
})

