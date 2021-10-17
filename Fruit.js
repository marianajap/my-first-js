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
    if (frutas[i].fruta == "🥝") {
        console.log("Kiwi");
    }
    else {
        console.log(frutas[i].fruta)
    }
    i++;
}

