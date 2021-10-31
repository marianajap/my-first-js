/**
 * Splits pair and odd numbers from 1 to a defined number
 */

const number = 26;

function pairs(number) {
    console.log("Pairs");
    for (let x = 1; x <= number; x++) {
        if (x % 2 == 0) {
            console.log(x);
        }
    }
}

pairs(number);