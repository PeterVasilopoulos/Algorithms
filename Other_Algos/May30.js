// Container With Most Water

// Test Case:
const input = [1,8,6,2,5,4,8,3,7]
const output = 49

// Function
const maxArea = function(height) {
    let max = 0

    for(let i = 0; i < height.length; i++) {
        for(let j = i + 1; j < height.length; j++) {
            let areaW = j - i
            let areaH = 0

            if(height[j] < height[i]) {
                areaH =  height[j]
            } else {
                areaH = height[i]
            }

            if(areaW * areaH > max) {
                max = areaW * areaH
            }
        }
    }

    return max
}

// Running The Function
// console.log(maxArea(input))


// Attempt 2
// FASTER THAN ORIGINAL
const maxArea2 = function(height) {
    let max = 0

    let i = 0
    let j = height.length - 1

    while(i <= j) {
        let minH = 0
        if(height[i] < height[j]) {
            minH = height[i]
        } else {
            minH = height[j]
        }

        if((j - i) * minH > max) {
            max = (j - i) * minH
        }

        if(height[i] < height[j]) {
            i++
        } else {
            j--
        }
    }

    return max
}

console.log(maxArea2(input))