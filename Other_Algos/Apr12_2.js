// Algo Description: 
    // Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Test Cases: 
nums1 = [0,1,0,3,12]
// [1,3,12,0,0]

nums2 = [0]
// [0]

// Function
function moveZeroes(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 0) {
            for(let j = i; j < arr.length; j++) {
                arr[j] = arr[j + 1];
            }
            arr.pop();
            arr.push(0);
        }
    }

    return arr;
}


// Testing
console.log(moveZeroes(nums1));
console.log(moveZeroes(nums2));