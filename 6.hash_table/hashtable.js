// Linked List Here for Hash Table
class Node {
  constructor() {
    this.value = null;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const newNode = new Node();
    newNode.value = value;
    if (this.size == 0) {
      this.head = newNode;
      this.tail = newNode;
      this.size += 1;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.size += 1;
    return;
  }

  prepend(value) {
    const newNode = new Node();
    newNode.value = value;
    if (this.size == 0) {
      this.head = newNode;
      this.tail = newNode;
      this.size += 1;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.size += 1;
  }

  toString() {
    if (this.size == 0) {
      console.log("Nothing inside linked list (yet)");
      return;
    }
    let currentNode = this.head;
    let allValues = [];
    while (true) {
      allValues.push(currentNode.value);
      if (currentNode.next == null) {
        break;
      }
      currentNode = currentNode.next;
    }
    let resultString = "";
    for (let i = 0; i < allValues.length; i++) {
      resultString += `(${allValues[i]}) -> `;
    }
    resultString += "(null)";
    return resultString;
  }

  pop() {
    // Since we don't know what's behind us, we would need to go from the head to before the tail.
    if (this.size == 0) {
      console.log("Nothing to be popped");
      return;
    }
    if (this.size == 1) {
      this.head = null;
      this.tail = null;
      this.size -= 1;
      return;
    }
    let currentNode = this.head;
    while (true) {
      if (currentNode.next == this.tail) {
        this.tail = currentNode;
        this.tail.next = null;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  at(index) {
    if (index > this.size - 1) {
      return "The index you're trying to access exceeds current list size";
    }
    if (this.size == 0) {
      return "There is nothing in this list";
    }
    if (index == 0) {
      return this.head;
    }
    if (index == this.size - 1) {
      return this.tail;
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  contains(val) {
    let currentNode = this.head;
    while (true) {
      if (currentNode.value == val) {
        return true;
      }
      if (currentNode.next == null) {
        return false;
      }
      currentNode = currentNode.next;
    }
  }

  find(val) {
    if (this.size == 0) {
      return "Nothing in here";
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (true) {
      if (currentNode == null) {
        return null;
      }
      if (currentNode.value == val) {
        return currentIndex;
      }
      currentNode = currentNode.next;
      currentIndex += 1;
    }
  }

  insertAt(val, index) {
    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    let newNode = new Node();
    newNode.value = val;
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    return;
  }

  removeAt(index) {
    if (this.size <= 2) {
      console.log(
        "Suggestion: Use pop() instead.\nReason: too small of a list to do this process."
      );
    }
    let prevNode = this.head;
    let toRemove = this.head.next;
    for (let i = 0; i < index - 1; i++) {
      prevNode = prevNode.next;
      toRemove = toRemove.next;
    }
    prevNode.next = toRemove.next;
    toRemove.next = null;
  }
}

// HASH TABLE STARTS HERE