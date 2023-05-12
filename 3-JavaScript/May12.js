// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg

/*
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;
const expected1 = [0, 2];
// Explanation: nums[0] + nums[2] = 2 + 7 = 9. Return order doesn't matter.

const nums2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
const expected2 = [2, 4];

const nums3 = [3, 8, 4, 1, 9, 0, -2];
const targetSum3 = 6;
const expected3 = [1, 6];

/*****************************************************************************/
/**
 * Finds the indexes of the nums that add up to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given nums
 *    that add up to the targetSum.
 */

// Spencer's Solution
function twoSum(nums, targetSum) {
    const map = {};

    for(let i = 0; i < nums.length; i++) {
        let currentVal = nums[i];
        let diff = targetSum - currentVal;

        if(map.hasOwnProperty(diff)) {
            return [map[diff], i];
        }

        map[currentVal] = i;
    }
}

// Our Solution
function twoSum2(nums, targetSum) {
    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === targetSum) {
                return [i, j];
            }
        }
    }
}


console.log(twoSum(nums1, targetSum1));
console.log(twoSum(nums2, targetSum2));
console.log(twoSum(nums3, targetSum3));

console.log("");

console.log(twoSum2(nums1, targetSum1));
console.log(twoSum2(nums2, targetSum2));
console.log(twoSum2(nums3, targetSum3));