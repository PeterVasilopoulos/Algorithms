/* 
  Given an array and an index,
  remove the item at that index.
  return the removed item

  If index is out of range, return null and don't alter array
  
  No built-in array methods except pop().

  Alter the original array, don't create a new one.
*/

const arr1 = ["a", "b", "c", "d", "e"];
const removeIdx1 = 1;
const expected1 = "b";
// after function call, arr1 should be:
const arr1Expected = ["a", "c", "d", "e"];

//             0    1     2
const arr2 = ["a", "b", "c"];
const removeIdx2 = 3;
const expected2 = null;
const arr2Expected = ["a", "b", "c"];

const arr3 = ["a", "b", "c"];
const removeIdx3 = -3;
const expected3 = null;
const arr3Expected = ["a", "b", "c"];

const arr4 = ["cake", "pie", "cookies", "vegetables", "candy"];
const removeIdx4 = 3;
const expected4 = "vegetables";
const arr4Expected =  ["cake", "pie", "cookies", "candy"];

/**
 * Removes and returns the item at the given idx from the given array and
 * shifts the remaining items to fill the empty space created by the item
 * being removed.

 * @param {Array<any>} items
 * @param {number} idx Index of the item to be removed.
 * @returns {any} The removed item.
 */
function removeAt(items, idx) {
  //your code here
    if(idx < 0 || idx >= items.length) {
        return null;
    }

    var removed = items[idx];

    for(var x = idx; x < items.length; x++) {
        items[x] = items[x + 1];
    }
    items.pop();
    return removed;
}

// Tests
const result1 = removeAt(arr1, removeIdx1);
console.log(result1, "should equal", expected1);
console.log(arr1, "should equal", arr1Expected);

const result2 = removeAt(arr2, removeIdx2);
console.log(result2, "should equal", expected2);
console.log(arr2, "should equal", arr2Expected);

const result3 = removeAt(arr3, removeIdx3);
console.log(result3, "should equal", expected3);
console.log(arr3, "should equal", arr3Expected);

const result4 = removeAt(arr4, removeIdx4);
console.log(result4, "should equal", expected4);
console.log(arr4, "should equal", arr4Expected);