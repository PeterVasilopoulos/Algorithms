/* 
    Given by Riot games. Rehash an incorrectly hashed string 
    by combining letter count occurrences and alphabetizing them.
*/

const str1 = "b70a164c32a20c10j3a15";

const expected1 = "a199b70c42j3";

/**
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
    const map = {}

    for(let i = 0; i < s.length; i++) {
        let currentLetter = ""
        let strCount = ""

        if(isNaN(s[i])) {
            currentLetter = s[i]
            continue
        } else {
            strCount += s[i]

            for(let j = i + 1; j < s.length; j++) {
                if(!isNaN(s[j])) {
                    strCount += s[j]
                } else {
                    i = j
                    break
                }

            }
        }

        // if(!isNaN(s[i])) {
        //     strCount += s[i]

        //     for(let j = i + 1; j < s.length; j++) {
        //         if(!isNaN(s[j])) {
        //             strCount += s[j]
        //         } else {
        //             i = j
        //             break
        //         }

        //     }
        // }
        
        if(currentLetter in map) {
            map[currentLetter] += parseInt(strCount)
        } else {
            map[currentLetter] = parseInt(strCount)
        }
    }

    return map
}

/*****************************************************************************/

// console.log(rehash(str1))


function rehash2(str) {
    const map = {}

    for(let i = 0; i < str.length; i++) {
        let current = ""
        let count = ""

        if(isNaN(str[i])) {
            current = str[i]
        } else {
            for(j = i; j < str.length; j++) {
                if(!isNaN(str[j])) {
                    count += str[j]
                } else {
                    i = j
                    break
                }
            }
        }

        console.log("Current:", current)
    }
}

console.log(rehash2(str1))



function correctSolution(str) {
    const hash = {}
    let numStr = ""
    let letter = str[0]

    for(let i = 1; i < str.length; i++) {
        const num = parseInt(str[i])
        const isNum = !isNaN(num) 
        const isLetter = isNaN(num)

        if(isNum) {
            numStr += str[i]
        }

        if(isLetter || i === str.length - 1) {
            const letterCount = parseInt(numStr)

            if(letter in hash) {
                hash[letter] += letterCount
            } else {
                hash[letter] = letterCount
            }
        }
    }
}

console.log(correctSolution(str))