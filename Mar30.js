/* 
  Given an array, move the minimum value to the front in-place
  return the array after done.
  No built in methods.
*/

const nums1 = [6, 4, 5, 1, 3, 2];

const expected1 = [1, 6, 4, 5, 3, 2];

const nums2 = [1, 5, 2, 9]; // min already at front
const expected2 = [1, 5, 2, 9];

// The min occurs twice, take the first instance of it
const nums3 = [5, 1, 0, 2, 3, 0];
const expected3 = [0, 5, 1, 2, 3, 0];

// Determine minium value and its index
// Swap or shift values so that the minimum value now appears at the front, preserving the order otherwise


/**
 * Moves the smallest number in the given array to the front.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given arr after the min has been moved to front.
 */
function minToFront(nums) {
  // code here

}

// Tests
const result1 = minToFront(nums1);
console.log(result1, "should equal", expected1);
console.log(nums1, "should equal", expected1);

const result2 = minToFront(nums2);
console.log(result2, "should equal", expected2);
console.log(nums2, "should equal", expected2);

const result3 = minToFront(nums3);
console.log(result3, "should equal", expected3);
console.log(nums3, "should equal", expected3);