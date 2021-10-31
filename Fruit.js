/**
 *  Muestra imagen de fruta seguido de nombre que hay dentro del 
 *  array de frutas
 * */ 

var frutas = [
    {
        "nombre": "Kiwi",
        "fruta": "🥝",
    },
    {
        "nombre": "Fresa",
        "fruta": "🍓",
    },
    {
        "nombre": "Melon",
        "fruta": "🍈",
    },

]
var i = 0;

while (i < frutas.length) {
    console.log(frutas[i].fruta,frutas[i].nombre);
    i++;
}

