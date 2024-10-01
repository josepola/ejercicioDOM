import { imagen, parrafo, tabla, lista } from "./creacion.js";

let contador = 1;

function crearTabla() {
    let cuadro = selecCuadro();
    cuadro.append(tabla());
    contador++;
}

function crearImagen() {
    let cuadro = selecCuadro();
    cuadro.append(imagen());
    contador++;
}

function crearParrafos() {
    let cuadro = selecCuadro();
    cuadro.append(parrafo());
    cuadro.appendChild(parrafo());
    contador++;
}

function crearLista() {
    let numero = parseInt(prompt('¿Cuántos elementos va a tener tu lista?'));
    let arrayItems = [];
    console.log(numero);
    for(let i=0;i<numero;i++) {
        arrayItems.push(prompt(`Dime el item de la lista ${i + 1}`));
    };
    let cuadro = selecCuadro();
    cuadro.append(lista(arrayItems));
    contador++;
    
}
// Esta función con el contador, me permite saber cuál es el cuadro html de destino
function selecCuadro() {
    // let cuadro;
    if(contador > 4) contador=1;
    switch (contador) {
        case 1:
            return document.querySelector('#cuadro1');
            break;
        case 2:
            return document.querySelector('#cuadro2');
            break;
        case 3:
            return document.querySelector('#cuadro3');
            break;
        case 4:
            return document.querySelector('#cuadro4');
            break;
    }
    
}

window.crearTabla = crearTabla;
window.crearImagen = crearImagen;
window.crearParrafos = crearParrafos;
window.crearLista = crearLista;