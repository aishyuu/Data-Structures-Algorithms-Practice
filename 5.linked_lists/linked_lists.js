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

  pop() {
    // Since we don't know what's behind us, we would need to go from the head to before the tail.
    if(this.size == 0) {
        console.log("Nothing to be popped");
        return;
    }
    if(this.size == 1) {
        this.head = null;
        this.tail = null;
        this.size -= 1;
        return;
    }
    let currentNode = this.head;
    while(true) {
        if(currentNode.next == this.tail) {
            this.tail = currentNode;
            this.tail.next = null;
            return;
        }
        currentNode = currentNode.next;
    }
  }
}

const list = new LinkedList();
list.append(5);
list.prepend(6);
list.append(1);

console.log(list.toString());
list.pop();

console.log(list.toString());