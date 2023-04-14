/* 
An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.
Is there a quick way to determine if they aren't an anagram before spending more time?
Given two strings
return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

const strA5 = "python";
const strB5 = "sython";
const expected5 = false;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
function isAnagram(s1, s2) {
    let map_A = [];
    let map_B = [];
    let result = true;

    if(s1.length != s2.length) {
        return false
    }

    for(let i = 0; i < s1.length; i++) {
        if(s1[i] in map_A) {
            map_A[s1[i].toLowerCase()]++
        } else {
            map_A[s1[i].toLowerCase()] = 1
        }
    }

    for(let i = 0; i < s2.length; i++) {
        if(s2[i] in map_B) {
            map_B[s2[i].toLowerCase()]++
        } else {
            map_B[s2[i].toLowerCase()] = 1
        }
    }

    for(obj in map_A) {
        if(map_A[obj] != map_B[obj]) {
            return false
        }
    }

    return result
}

/*****************************************************************************/

console.log(isAnagram(strA1, strB1))
console.log(isAnagram(strA2, strB2))
console.log(isAnagram(strA3, strB3))
console.log(isAnagram(strA4, strB4))
console.log(isAnagram(strA5, strB5))