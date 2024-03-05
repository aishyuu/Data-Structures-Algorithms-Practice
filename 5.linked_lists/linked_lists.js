// Linked List implementation here!
class Node {
  constructor() {
    this.value = null;
    this.next = null;
  }
}

class LinkedList {
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
    for(let i = 0; i < allValues.length; i++) {
        resultString += `(${allValues[i]}) -> `
    }
    resultString += "(null)"
    return resultString;
  }
}

const list = new LinkedList();
list.append(5);
list.prepend(6);
list.append(1);

console.log(list.toString());
