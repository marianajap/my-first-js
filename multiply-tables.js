/**
 * Muestra en consola las tablas de multiplicar del 0 al 10
 */

function displayTable(table) {
    console.log("Table of " + table);
    var multiply = 0;
    var result;
    
    while(multiply <= 10) {
        result = table * multiply;
        console.log(table + " X " + multiply + " = " + result);
        multiply++;
    }
    console.log("");
}

var table = 0;

while(table <= 10) {
    displayTable(table);
    table++;
}