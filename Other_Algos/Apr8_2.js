// Algo Description: 
// Given an integer x, return true if x is a palindrome and false otherwise


// Test Cases: 
// Test Case 1
x1 = 121
// true

// Test Case 2
x2 = -121
// false

// Test Case 3
x3 = 10
// false


// Function
var isPalindrome = function(x) {
    x = String(x);
    let new_num = "";

    for(let i = x.length - 1; i >= 0; i--) {
        new_num += x[i];
    }

    if(new_num == x) {
        return true;
    } else {
        return false
    }
};


// Testing
console.log(isPalindrome(x1))

console.log(isPalindrome(x2))

console.log(isPalindrome(x3))