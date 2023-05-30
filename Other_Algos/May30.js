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
console.log(maxArea(input))