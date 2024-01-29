class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor(listHead = null) {
    this.listHead = listHead;
  }

  append(value) {
    let node = new Node(value);
    if (this.listHead === null) {
      this.listHead = node;
    } else {
      let temp = this.listHead;
      while (temp.nextNode) {
        temp = temp.nextNode;
      }
      temp.nextNode = node;
    }
  }

  prepend(value) {
    let node = new Node(value);
    node.nextNode = this.listHead;
    this.listHead = node;
  }

  size() {
    let temp = this.listHead;
    let counter = 0;
    while (temp != null) {
      counter++;
      temp = temp.nextNode;
    }
    return counter;
  }

  head() {
    return this.listHead;
  }

  tail() {
    let temp = this.listHead;
    while (temp.nextNode != null) temp = temp.nextNode;
    return temp;
  }

  at(index) {
    let temp = this.listHead;
    for (let i = 0; i < index; i++) {
      temp = temp.nextNode;
      if (temp == null) return "There is no item";
    }
    return temp;
  }

  pop() {
    let current = this.listHead;
    let previous = null;
    while (current.nextNode != null) {
      previous = current;
      current = current.nextNode;
    }
    previous.nextNode = null;
  }

  contains(value) {
    let temp = this.listHead;
    while (temp != null) {
      if (temp.value === value) {
        return true;
      }
      temp = temp.nextNode;
    }
    return false;
  }

  find(value) {
    let temp = this.listHead;
    let counter = 0;
    while (temp !== null) {
      if (temp.value === value) {
        return counter;
      }
      temp = temp.nextNode;
      counter += 1;
    }
    return null;
  }

  toString() {
    let string = "";
    let temp = this.listHead;
    while (temp !== null) {
      string += `( ${temp.value} ) -> `;
      temp = temp.nextNode;
    }
    return string + "null";
  }

  insertAt(value, index) {
    if (this.listHead == null) this.prepend(value);
    else {
      let current = this.listHead;
      let previous = null;
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.nextNode;
        if (current == null) break;
      }
      const tmp = new Node(value);
      previous.nextNode = tmp;
      tmp.nextNode = current;
    }
  }

  removeAt(index) {
    if (this.listHead == null) return "List is already empty";

    let current = this.listHead;
    let previous = null;
    for (let i = 0; i < index; i++) {
      previous = current;
      current = current.nextNode;
      if (current == null) return "There is no item";
    }
    previous.nextNode = current.nextNode;
  }
}

// Create a new linked list
const myList = new LinkedList();

// Append some values
myList.append(10);
myList.append(20);
myList.append(30);

// Prepend a value
myList.prepend(5);

// Print the linked list
console.log("Linked List:", myList.toString());

// Get the size of the linked list
console.log("Size:", myList.size());

// Get the head of the linked list
console.log("Head:", myList.head());

// Get the tail of the linked list
console.log("Tail:", myList.tail());

// Access an element at a specific index
console.log("Element at index 2:", myList.at(2));

// Check if the linked list contains a specific value
console.log("Contains 20:", myList.contains(20));

// Find the index of a specific value
console.log("Index of value 20:", myList.find(20));

// Insert a value at a specific index
myList.insertAt(25, 2);
console.log("Linked List after inserting 25 at index 2:", myList.toString());

// Remove an element at a specific index
myList.removeAt(1);
console.log(
  "Linked List after removing element at index 1:",
  myList.toString()
);

// Pop the last element
myList.pop();
console.log("Linked List after popping the last element:", myList.toString());
