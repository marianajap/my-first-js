/**
 * Muestra en consola las tablas de multiplicar del 0 al 10
 */

function displayTable(table) {
    console.log("Table of " + table);
    var multiply = 0;

    while(multiply <= 10) {
        console.log(`${table} X ${multiply} = ${table * multiply}`);
        multiply++;
    }
    console.log("");
}

var table = 0;

while(table <= 10) {
    displayTable(table);
    table++;
}