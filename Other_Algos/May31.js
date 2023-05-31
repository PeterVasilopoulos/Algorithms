// Climbing stairs
// you can either step up 1 or 2 stairs at a time, 
// how many possible combinations are there to get to the top?


// Test Cases:
const input1 = 2
const expected1 = 2

const input2 = 3
const expected2 = 3

const input3 = 4


//Function 
var climbStairs = function (n) {
    if (n == 1) {
        return 1
    }

    const sequence = []

    for (let i = 0; i <= n; i++) {
        if (i == 0 || i == 1) {
            sequence.push(1)
        } else {
            nextNum = sequence[i - 1] + sequence[i - 2]
            sequence.push(nextNum)
        }
    }

    return sequence[sequence.length - 1]
};

console.log(climbStairs(input1))
console.log(climbStairs(input2))
console.log(climbStairs(input3))
// console.log(climbStairs(45))

// let mem = []
// var climbStairs2 = function (n) {
//     if (n <= 2) return n;
//     if (mem[n] != undefined) return mem[n]
//     mem[n] = climbStairs2(n - 1) + climbStairs2(n - 2)
//     return mem[n]
// };

// console.log(climbStairs2(4))