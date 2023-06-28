class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
/**
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top and removed items are removed from the top .
 */
class Stack {
    /**
     * The constructor is executed when instantiating a new Stack() to construct
     * a new instance.
     * @returns {Stack} This new Stack instance is returned without having to
     *    explicitly write 'return' (implicit return).
     */
    constructor() {
        this.top = null;
    }

    /**
     * Adds a new given item to the top.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top.
     * @returns {number} The new length of this stack.
     */
    push(val) {
        let newNode = new Node(val);
        newNode.next = this.top;
        this.top = newNode;
        return this;
    }

    /**
     * Removes the top item (the top).
     * - Time: O(1) constant.
     * - Space: O(1).
     * @returns {any} The data of the top item of the stack.
     */
    pop() {
        let temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        return temp.data;
    }

    /**
     * Returns the top item of the stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1).
     * @returns {any} The top item.
     */
    peek() {
        return this.top;
    }

    /**
     * Determines if the stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1).
     * @returns {boolean}
     */
    isEmpty() {
        return this.top == null;
    }

    /**
     * Gets the count of items in the stack.
     * - Time: O(n) linear, n = list length.
     * - Space: O(1).
     * @returns {number} The total number of items.
     */
    size() {
        let tempStack = new Stack();
        while (!this.isEmpty()) {
            tempStack.push(this.pop());
        }
        let size = 0;
        while (!tempStack.isEmpty()) {
            size++;
            this.push(tempStack.pop());
        }
        return size;
    }

    // Time: O(n) linear, n = list length
    // Space: O(n)
    print() {
        let runner = this.top;
        let vals = "";

        while (runner) {
            vals += `${runner.data}${runner.next ? ", " : ""}`;
            runner = runner.next;
        }
        console.log(`Top: ${this.top.data}`)
        console.log(vals);
        return vals;
    }

}


/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {

    constructor() {
        this.head = null;
    }

    /**
     * Adds a new given item to the back of this queue.
     * - Time: O(n) constant.
     * - Space: O(n) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
        const addNode = new Node(item)

        if (this.isEmpty()) {
            this.head = addNode
            return 1
        }

        let runner = this.head

        while (runner.next) {
            runner = runner.next
        }

        runner.next = addNode

        return this.size()
    }

    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        if (this.isEmpty()) {
            return null
        }

        const oldHead = this.head
        this.head = this.head.next
        return oldHead.data
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        if (this.isEmpty()) {
            return this.head
        }

        return this.head.data
    }

    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        if (this.head === null) {
            return true
        } else {
            return false
        }
    }

    /**
     * Retrieves the size of this queue.
     * - Time: O(n) constant.
     * - Space: O(n) constant.
     * @returns {number} The length.
     */
    size() {
        let runner = this.head
        let count = 1
        while (runner.next) {
            runner = runner.next
            count++
        }
        return count
    }


    // Print
    print() {
        let runner = this.head;
        let vals = "";

        while (runner) {
            vals += `${runner.data}${runner.next ? ", " : ""}`;
            runner = runner.next;
        }
        console.log(`Head: ${this.head.data}`)
        console.log(vals);
        return vals;
    }

    arrToQueue(arr) {
        for (const item of arr) {
            this.enqueue(item);
        }
    }

}

/**
 * Compares 2 queues to see if they are equal.
 Queue: enqueue, dequeue, front, isEmpty
 Stack: push, pop, peek, isEmpty
 * Avoid indexing the queue items directly via bracket notation, use the
 * queue methods instead for practice.
 * Use no extra array or objects.
 * The queues should be returned to their original order when done.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Queue} q1 q2 The queues to be compared 
 * @returns {boolean} Whether all the items of the two queues are equal and
 *    in the same order.
 */
function compareQueue(q1, q2) {
    if (q1.size() !== q2.size()) {
        return false
    }

    const size = q1.size()
    let same = true

    for (let i = 0; i < size; i++) {
        let q1Item = q1.dequeue
        let q2Item = q2.dequeue

        console.log("Q1 DATA:", q1Item)
        if (q1Item.data !== q2Item.data) {
            same = false
        }

        q1.enqueue(q1Item.data)
        q2.enqueue(q2Item.data)
    }

    return same
}


const test1 = new Queue();
test1.arrToQueue(['a', 'b', 'c', 'd', 'e'])
const test2 = new Queue();
test2.arrToQueue(['a', 'b', 'c', 'd', 'e'])
const test3 = new Queue();
test3.arrToQueue(['a', 'b', 'c', 'e', 'd'])
const test4 = new Queue();
test4.arrToQueue(['a', 'b', 'c'])

// Uncomment the following to test your algo
console.log(compareQueue(test1, test2)) // expected : True
console.log(compareQueue(test1, test3)) // expected : False
console.log(compareQueue(test2, test4)) // expected : False

// // Make sure the above function will not alter the original queue
test1.print();  // Expected: 'a,b,c,d,e'
test2.print();  // Expected: 'a,b,c,d,e'
test3.print();  // Expected: 'a,b,c,e,d'
test4.print();  // Expected: 'a,b,c'



/**
 * Determines if the queue is a palindrome (same items forward and backwards).
 * Avoid indexing queue items directly via bracket notation, instead use the
 * queue methods for practice.
 * Use only 1 stack as additional storage, no other arrays or objects.
 * The queue should be returned to its original order when done.
 * - Time: O(?).
 * - Space: O(?).
 * @returns {boolean}
 */
function isPalindrome(q) { }

const ptest1 = new Queue();
ptest1.arrToQueue(['a', 'b', 'c', 'd', 'e'])

const ptest2 = new Queue();
ptest2.arrToQueue(['a', 'b', 'c', 'b', 'a'])

  // Uncomment the test case below for isPalindrome
  // console.log(isPalindrome(ptest1)); // expected : false
  // console.log(isPalindrome(ptest2)); // expected: true

  // ptest1.print();
  // ptest2.print();