// Hiding Amongst the Crowd

//A word is on the loose and now has tried to 
// hide amongst a crowd of tall letters! Help 
// write a function to detect what the word is, 
// knowing the following rules:

// - The wanted word is in lowercase.
// - The crowd of letters is all in uppercase.
// - Note that the word will be spread out amongst 
//   the random letters, but their letters remain in the same order.


// Test Cases
const str1 = "UcUNFYGaFYFYGtNUH"
const expected1 = "cat"

const str2 = "bEEFGBuFBRrHgUHlNFYaYr"
const expected2 = "burglar"

const str3 = "YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"
const expected3 = "embezzlement"


// Function
function findWord(str) {
    let newWord = ""

    for(let i = 0; i < str.length; i++) {
        if(str[i] === str[i].toLowerCase()) {
            newWord += str[i]
        }
    }

    return newWord
}


// Testing
console.log(findWord(str1))
console.log(findWord(str2))
console.log(findWord(str3))