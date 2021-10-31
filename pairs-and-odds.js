/**
 * Splits pair and odd numbers from 1 to a defined number
 */

const number = 26;
const pairs = [];
const odds = [];

for (let x = 1; x <= number; x++) {
    if (x % 2 == 0) {
        pairs.push(x);
    } else {
        odds.push(x);
    }
}

console.log('Pairs', pairs);
console.log('Odds', odds);