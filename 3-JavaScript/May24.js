// Morning Algo

const strA1 = "Hello"
const strB1 = "elloH"

const strA2 = "Testing"
const strB2 = "nothesame"

const strA3 = "Hello"
const strB3 = "asHasdfelldfao"

function test(s1, s2) {
    const map1 = {}
    const map2 = {}

    s1 = s1.toLowerCase()
    s2 = s2.toLowerCase()

    for(let i = 0; i < s1.length; i++) {
        if(!map1[s1[i]]) {
            map1[s1[i]] = 1
        } else {
            map1[s1[i]]++
        }
    }

    for(let i = 0; i < s2.length; i++) {
        if(!map2[s2[i]]) {
            map2[s2[i]] = 1
        } else {
            map2[s2[i]]++
        }
    }

    // console.log(map1)
    // console.log(map2)


    for(key in map1) {
        if(!map2[key]) {
            return false
        } else if(map1[key] > map2[key]) {
            return false
        }
    }

    return true
}

console.log(test(strA1, strB1))
console.log(test(strA2, strB2))
console.log(test(strA3, strB3))