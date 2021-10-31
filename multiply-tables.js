/**
 * Muestra en consola las tablas de multiplicar del 0 al 10
 */

function displayTable(table) {
    console.log("Table of " + table);

    for (let multiply = 0; multiply <= 10; multiply++) {
        console.log(`${table} X ${multiply} = ${table * multiply}`);
    }
    console.log("");
}

for (let table = 0; table <= 10; table++) {
    displayTable(table);
}