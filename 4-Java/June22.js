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
        this.size = 0;
    }
    /**
     * Creates a new node and adds it at the front of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtFront(data) {
        const newNode = new Node(data); // Create a new node

        if (this.head !== null) {
            this.head.previous = newNode; // Update previous pointer of current head
        }

        newNode.next = this.head; // Set next pointer of new node to current head
        newNode.previous = null; // Set previous pointer of new node to null

        this.head = newNode; // Update head to new node

        this.size++

        return this;
    }

    /**
     * Creates a new node and adds it at the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBack(data) {
        let newNode = new Node(data)

        // If the list is null, insert at head
        if (this.head == null) {
            this.head = newNode
            this.tail = newNode
            this.size++
            return this
        }

        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode

        this.size++

        return this
    }

    // EXTRA
    /**
     * Removes the middle node in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data of the removed node.
     */
    removeMiddleNode() {
        if(this.size % 2 === 0) {
            return null
        }

        if(this.size % 2 === 1) {
            const data = this.head.data
            this.head = null
            this.tail = null
            return data
        }

        const middle = Math.floor(this.size / 2) + 1
        let runner = this.head
        for (let i = 1; i < middle; i++) {
            runner = runner.next
        }

        const prevNode = runner.prev
        const nextNode = runner.next

        prevNode.next = nextNode
        nextNode.prev = prevNode

        runner.prev = null
        runner.next = null

        return runner.data
    }

    /**
     * Determines if this list is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if this list is empty.
     */
    isEmpty() {
        return this.head === null;
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

/**************** Uncomment these test lists after insertAtBack is created. ****************/
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


unorderedList.insertAtBack(22)
console.log(unorderedList.toArray())
console.log(unorderedList.removeMiddleNode())

console.log(singleNodeList.toArray())
console.log(singleNodeList.removeMiddleNode())