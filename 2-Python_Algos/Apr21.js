/* 
Array: Mode

Create a function that, given an array of ints,
returns the int that occurs most frequently in the array.
What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
        - return empty array
*/

const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];

const nums6 = [5, 1, 4, 5, 1, 4];
const expected6 = [];
//  - order doesn't matter

/**
 * Finds the mode or all modes if there are more than one. The mode is the
 *    value which occurs the most times in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Test
 * @returns {Array<number>} Mode or modes in any order.
 */
function mode(nums) {
    let map = {}
    let new_arr = []

    // Check if length is only 1
    if(nums.length == 1) {
        new_arr.push(nums[0])
        return new_arr
    }

    // Add all values and counts to map
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] in map) {
            map[nums[i]]++
        } else {
            map[nums[i]] = 1
        }
    }

    let counter = 0
    let same = true

    // Check count of each number
    for(key in map) {
        if(map[key] > counter) {
            counter = map[key]
        } 
        else if(map[key] < counter) {
            same = false
        }
    }

    // Add each value if its count is equal to counter
    for(key in map) {
        if(map[key] == counter) {
            new_arr.push(key)
        }
    }

    // Check if the count is the same for all numbers
    if(!same) {
        return new_arr
    } else {
        return []
    }
}

/*****************************************************************************/

console.log(mode(nums1))
console.log(mode(nums2))
console.log(mode(nums3))
console.log(mode(nums4))
console.log(mode(nums5))
console.log(mode(nums6))