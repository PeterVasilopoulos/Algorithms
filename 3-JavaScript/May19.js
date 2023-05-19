/* 
  Given to me (Neil) in an interview
  What is it about a string that makes it possible for it to become a palindrome?
  a word, phrase, or sequence that reads the same backward as forward.

  Given a string return whether or not it's possible
  to make a palindrome out of the string's characters.

*/

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

const str7 = "sanitation"

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */
function canStringBecomePalindrome(bacon) {
    // Sanitation
    if(bacon.length === 0) {
        return false
    }

    // Hashmap to count letter instances
    let hashbrown = {}

    // Loop to add letters to map
    for(let i = 0; i < bacon.length; i++) {
        if(bacon[i] in hashbrown) {
            hashbrown[bacon[i]]++
        } else {
            hashbrown[bacon[i]] = 1
        }
    }

    // Odd instance counter
    let eggs = 0

    // Check count of odd letters
    for(potato in hashbrown) {
        if(hashbrown[potato] % 2 !== 0) {
            eggs++
        }
    }

    // Return statement
    if(eggs > 1) {
        return false
    } else {
        return true
    }
}

console.log(canStringBecomePalindrome(str1));
console.log(canStringBecomePalindrome(str2));
console.log(canStringBecomePalindrome(str3));
console.log(canStringBecomePalindrome(str4));
console.log(canStringBecomePalindrome(str5));
console.log(canStringBecomePalindrome(str6));
console.log(canStringBecomePalindrome(str7));