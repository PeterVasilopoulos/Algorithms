/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeapBasic {
  constructor() {
    /**
     * 0th index not used, so null is a placeholder. Not using 0th index makes
     * calculating the left and right children's index cleaner.
     * This also effectively makes our array start at index 1.
     */
    this.heap = [null];
  }

  /**
   * Extracts the min num from the heap and then re-orders the heap to
   * maintain order so the next min is ready to be extracted.
   * 1. Save the first node to a temp var.
   * 2. Pop last node off and overwrite idx1 with it.
   * 3. Iteratively swap the old last node that is now at idx1 with it's
   *    smallest child IF the smallest child is smaller than it.
   * - Time: O(log n) logarithmic due to shiftDown.
   * - Space: O(1) constant.
   * @returns {?number} The min number or null if empty.
   */
  extract() {
    let tempNum = this.heap[1]
    this.heap[1] = this.heap[this.heap.length - 1]
    this.heap.pop()

    let index = 1

    while(this.heap[index * 2] || this.heap[index * 2 + 1]) {
      const left = index * 2
      const right = index * 2 + 1
      let swap

      if(this.heap[left] < this.heap[right]) {
        swap = left
      } else {
        swap = right
      }

      if(this.heap[swap] < this.heap[index]) {
        let temp = this.heap[index]
        this.heap[index] = this.heap[swap]
        index = swap
        this.heap[swap] = temp
      } else {
        break
      }
    }

    return tempNum
  }


  getLeft(index) {
    return index * 2
  }

  getRight(index) {
    return index * 2 + 1
  }

  swap(left, right) {
    if(this.heap[left] < this.heap[right]) {
      return left
    } else {
      return right
    }
  }


  /**
   * Retrieves the size of the heap, ignoring the null placeholder.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number}
   */
  size() {
    // - 1 since 0 index is unused
    return this.heap.length - 1;
  }

  /**
   * Retrieves the top (minimum number) in the heap without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {?number} Null if empty.
   */
  top() {
    return this.heap.length > 1 ? this.heap[1] : null;
  }

  /**
   * Inserts a new number into the heap and reorders heap to maintain order.
   * 1. Push new num to back.
   * 2. Iteratively swap the new num with it's parent while it is smaller than
   *    it's parent.
   * - Time: O(log n) logarithmic due to shiftUp.
   * - Space: O(1) constant.
   * @param {number} num The num to add.
   */
  insert(num) {
    this.heap.push(num)

    let newIndex = this.heap.length - 1
    let parent = Math.floor(newIndex / 2)

    while (this.heap[newIndex] < this.heap[parent]) {
      let temp = parent

      this.heap[newIndex] = this.heap[parent]
      this.heap[parent] = num

      newIndex = parent
      parent = Math.floor(newIndex / 2)
    }
  }

  // AKA: siftUp, heapifyUp, bubbleUp to restore order after insert
  shiftUp() {
    let idxOfNodeToShiftUp = this.heap.length - 1;

    while (idxOfNodeToShiftUp > 1) {
      const idxOfParent = this.idxOfParent(idxOfNodeToShiftUp);

      const isParentSmallerOrEqual =
        this.heap[idxOfParent] <= this.heap[idxOfNodeToShiftUp];

      // Parent is supposed to be smaller so ordering is complete.
      if (isParentSmallerOrEqual) {
        break;
      }

      this.swap(idxOfNodeToShiftUp, idxOfParent);
      // after swapping the node is at idxOfParent now.
      idxOfNodeToShiftUp = idxOfParent;
    }
  }




  // prints tree with root on left and index in parens in reverse inorder traversal
  // https://www.geeksforgeeks.org/print-binary-tree-2-dimensions/
  printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
    if (parentIdx > this.heap.length - 1) {
      return;
    }

    spaceCnt += spaceIncr;
    this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
      `${this.heap[parentIdx]} (${parentIdx})`
    );

    this.printHorizontalTree(parentIdx * 2, spaceCnt);
  }

  printArr(...appendedMsgs) {
    const arrStr = `\n[${["null", ...this.heap.slice(1)].join(", ")}]`;
    const msgLen = arrStr.length + appendedMsgs.toString().length;
    console.log("-".repeat(msgLen), arrStr, ...appendedMsgs);
  }
}

// const testMinHeap = new MinHeapBasic();
// testMinHeap.insert(5);
// testMinHeap.insert(4);
// testMinHeap.insert(7);
// testMinHeap.insert(3);
// testMinHeap.insert(6);
// console.log(testMinHeap.extract());
// testMinHeap.insert(2);

// console.log(testMinHeap.extract());
// console.log(testMinHeap.extract());
// console.log(testMinHeap.extract());
// console.log(testMinHeap.extract());
// console.log(testMinHeap.extract());
// console.log(testMinHeap.extract());

const newHeap = new MinHeapBasic()
newHeap.insert(1)
newHeap.insert(6)
newHeap.insert(10)
newHeap.insert(5)
newHeap.insert(2)
newHeap.insert(19)
newHeap.insert(12)
newHeap.insert(55)
newHeap.insert(20)
newHeap.printHorizontalTree()
newHeap.extract()
console.log("--------------------")
newHeap.printHorizontalTree()