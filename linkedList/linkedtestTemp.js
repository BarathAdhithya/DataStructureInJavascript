class Node {
  constructor() {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printlist() {
    const listArray = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      listArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return listArray;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.treverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printlist();
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      return this.printlist();
    }
    const leader = this.traverseToIndex(index - 1);
    leader.next = leader.next.next;
    this.length--;
    return this.printlist();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}
