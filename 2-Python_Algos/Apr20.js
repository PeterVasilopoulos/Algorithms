/* 
Given an int to represent how much change is needed
calculate the fewest number of coins needed to create that change,
using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
function fewestCoinChange(cents) {
    coins = {}

    if(cents >= 25) {
        coins['quarter'] = Math.floor(cents/25);
        cents -= 25 * coins['quarter']
    }

    if(cents >= 10) {
        coins['dime'] = Math.floor(cents/10);
        cents -= 10 * coins['dime']
    }

    if(cents >= 5) {
        coins['nickel'] = Math.floor(cents/5);
        cents -= 5 * coins['nickel']
    }

    if(cents >= 1) {
        coins['penny'] = cents;
    }
    
    return coins
}

/*****************************************************************************/

console.log(fewestCoinChange(cents1))
console.log(fewestCoinChange(cents2))
console.log(fewestCoinChange(cents3))
console.log(fewestCoinChange(cents4))