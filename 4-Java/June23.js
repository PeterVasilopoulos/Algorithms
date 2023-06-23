class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}


/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
    /**
     * Executed when the new keyword is used to construct a new DoublyLInkedList
     * instance that inherits these methods and properties.
     */
    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEmpty() {
        return this.head === null;
    }

    insertAtFront(data) {
        const newHead = new DLLNode(data);

        if (this.isEmpty()) {
            this.head = newHead;
            this.tail = newHead;
            return this;
        }

        this.head.prev = newHead;
        newHead.next = this.head;
        this.head = newHead;
        return this;
    }


    insertAtBack(data) {
        const newTail = new Node(data);

        if (this.isEmpty()) {
            // if no head set the newTail to be both the head and the tail
            this.head = newTail;
            this.tail = newTail;
        } else {
            this.tail.next = newTail;
            newTail.prev = this.tail;

            this.tail = newTail;
        }
        return this;
    }

    /**
   * Inserts a new node with the given newVal after the node that has the
   * given targetVal as it's data.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} targetVal The node data to find.
   * @param {any} newVal Data for the new node.
   * @returns {boolean} Indicates if the new node was added.
   */
    insertAfter(targetVal, newVal) {
        if (this.tail == targetVal) {
            this.insertAtBack(newVal);
            return this;
        }

        let headRunner = this.head
        let tailRunner = this.tail

        let foundVal = null

        while (headRunner.next !== tailRunner && headRunner !== tailRunner) {
            if (headRunner.data === targetVal) {
                // If head runner data equals target val, set foundVal variable and break loop
                foundVal = headRunner
                break
            }
            if (tailRunner.data === targetVal) {
                // If tail runner data equals target val, set foundVal variable and break loop
                foundVal = tailRunner
                break
            }

            // Increments variables if value is not found
            headRunner = headRunner.next
            tailRunner = tailRunner.prev
        }

        if (foundVal == null) {
            if (headRunner.data == targetVal) {
                foundVal = headRunner;
            }
            if (tailRunner.data == targetVal) {
                foundVal = tailRunner;
            }
        }

        if (foundVal) {
            // Create node with the newVal passed through the function
            const insertNode = new Node(newVal)

            insertNode.prev = foundVal
            insertNode.next = foundVal.next

            foundVal.next.prev = insertNode
            foundVal.next = insertNode

            return true
        }

        return false
    }

    /**
     * Inserts a new node with the given newVal before the node that has the
     * given targetVal as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} targetVal The node data to find.
     * @param {any} newVal Data for the new node.
     * @returns {boolean} Indicates if the new node was added.
     */
    insertBefore(targetVal, newVal) {
        // Create a runner that starts at the head and one that starts at the tail
        let headRunner = this.head
        let tailRunner = this.tail

        // 
        let foundVal = null

        while (headRunner.next !== tailRunner && headRunner !== tailRunner) {
            if (headRunner.data === targetVal) {
                // If head runner data equals target val, set foundVal variable and break loop
                foundVal = headRunner
                break
            }
            if (tailRunner.data === targetVal) {
                // If tail runner data equals target val, set foundVal variable and break loop
                foundVal = tailRunner
                break
            }

            // Increments variables if value is not found
            headRunner = headRunner.next
            tailRunner = tailRunner.prev
        }

        if (foundVal) {
            // Create node with the newVal passed through the function
            const insertNode = new Node(newVal)

            insertNode.prev = foundVal.prev
            insertNode.next = foundVal

            foundVal.prev.next = insertNode
            foundVal.prev = insertNode

            return true
        }

        return false
    }



    /**
     * Converts this list to an array of the node's data.
     * - Time: O(n) linear, n = list length.
     * - Space: O(n) linear, array grows as list length increases.
     * @returns {Array<any>} All the data of the nodes.
     */
    toArray() {
        const vals = [];
        let runner = this.head;

        while (runner) {
            vals.push(runner.data);
            runner = runner.next;
        }
        return vals;
    }

    /**
     * Adds all the given items to the back of this list.
     * @param {Array<any>} items Items to be added to the back of this list.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBackMany(items = []) {
        items.forEach((item) => this.insertAtBack(item));
        return this;
    }
}

const emptyList = new DoublyLinkedList();

const singleNodeList = new DoublyLinkedList().insertAtBack(1);
const biNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
const firstThreeList = new DoublyLinkedList().insertAtBackMany([1, 2, 3]);
const secondThreeList = new DoublyLinkedList().insertAtBackMany([4, 5, 6]);
const unorderedList = new DoublyLinkedList().insertAtBackMany([
    -5,
    -10,
    4,
    -3,
    6,
    1,
    -7,
    -2,
]);

console.log(unorderedList.insertAfter(-7, 100))
console.log(unorderedList.toArray())
