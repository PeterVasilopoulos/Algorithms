// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.

// You can return the answer in any order.


// Test Case 1:
nums1 = [2,7,11,15], target1 = 9
// [0, 1]

// Test Case 2:
nums2 = [3,2,4], target2 = 6
// [1,2]

// Test Case 3:
nums3 = [3,3], target3 = 6
// [0,1]


// Function
var twoSum = function(nums, target) {
    for(let x = 0; x < nums.length; x++) {
        for(let y = x + 1; y < nums.length; y++) {
            if(nums[x] + nums[y] == target) {
                return [x, y];
            }
        }
    }
};

// Testing
console.log(twoSum(nums1, target1))

console.log(twoSum(nums2, target2))

console.log(twoSum(nums3, target3))