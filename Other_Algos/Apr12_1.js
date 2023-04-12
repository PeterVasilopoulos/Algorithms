// Algo Description: 
    // Given the head of a singly linked list, return the middle node of the linked list.
    // If there are two middle nodes, return the second middle node.

// Test Cases: 
head1 = [1,2,3,4,5]
// [3, 4, 5]

head2 = [1, 2, 3, 4, 5, 6]
// [3, 4, 5]


// Function
function middleNode(arr) {
    let middle = 0;

    middle = (arr.length - 1) / 2;
    middle = Math.ceil(middle);

    return arr[middle];
}


// Testing
console.log(middleNode(head1))
console.log(middleNode(head2))