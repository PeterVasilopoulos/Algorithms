/* 
  https://visualgo.net/en/sorting
    
  Selection sort works by iterating through the list, finding the minimum
  value, and moving it to the beginning of the list. Then, ignoring the first
  position, which is now sorted, iterate through the list again to find the
  next minimum value and move it to index 1. This continues until all values
  are sorted.
  Unstable sort.
  
  Time Complexity
    - Best: O(n^2) quadratic.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic.
  Space: O(1) constant.
  Selection sort is one of the slower sorts.
  - ideal for: pagination, where page 1 displays 10 records for example,
      you run selection sort for 10 iterations only to display the first 10
      sorted items.
*/

const numbersOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numbersReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const test = [1, 1, 2, 5, 6, 6, 7, 88, 8, 8, 10, 1, 3, 54, 2, 1, 4];


/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} numbers
 * @returns {Array<number>} The given array after being sorted.
 */
function selectionSort(numbers = []) {
    for(let i = 0; i < numbers.length; i++) {
        let min = numbers[i]
        let minIdx = i

        for(let j = i; j < numbers.length; j++) {
            if(numbers[j] < min) {
                min = numbers[j]
                minIdx = j
            }
        }
        if(numbers[i] != numbers[minIdx]) {
            [numbers[i], numbers[minIdx]] = [numbers[minIdx], numbers[i]]
        }
    }
    return numbers
}

/*****************************************************************************/

console.log(selectionSort(numbersRandomOrder))
console.log(selectionSort(numbersReversed))
console.log(selectionSort(test))