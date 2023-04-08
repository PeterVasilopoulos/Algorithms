// Algo Description: 
// Return the integer version of a roman numeral string

// Test Cases: 
// Test 1
s1 = "III"
// 3

// Test 2
s2 = "LVIII"
// 58

// Test 3
s3 = "MCMXCIV"
// 1994

// Test 4
s4 = "IV"
// 4


// Function
symbols = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000
}

var romanToInt = function(s) {
    let num = 0;
    for(let x = s.length - 1; x >= 0; x--) {
        if((s[x] == "V" || s[x] == "X") && s[x - 1] == "I") {
            num += symbols[s[x]] - 1;
            x--;
        }
        else if((s[x] == "L" || s[x] == "C") && s[x -1] == "X") {
            num += symbols[s[x]] -10;
            x--;
        }
        else if((s[x] == "D" || s[x] == "M") && s[x - 1] == "C") {
            num += symbols[s[x]] - 100;
            x--;
        }
        else {
            num += symbols[s[x]];
        }
    }
    return num;
};


// Testing
console.log(romanToInt(s1))

console.log(romanToInt(s2))

console.log(romanToInt(s3))

console.log(romanToInt(s4))