class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    let currentNode = this.root;
    while (true) {
      if (currentNode === null) {
        return false;
      } else if (value === currentNode.value) {
        return currentNode;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
        continue;
      } else {
        currentNode = currentNode.right;
        continue;
      }
    }
    return false;
  }

  tempLookup(value) {
    let currentNode = this.root;
    let previousNode = null;
    let currentAndPreviousNode = {
      currentNode: null,
      previousNode: null,
    };
    while (true) {
      if (currentNode === null) {
        return false;
      } else if (value === currentNode.value) {
        currentAndPreviousNode = {
          currentNode: currentNode,
          previousNode: previousNode,
        };
        return currentAndPreviousNode;
      } else if (value < currentNode.value) {
        previousNode = currentNode;
        currentNode = currentNode.left;
        continue;
      } else {
        previousNode = currentNode;
        currentNode = currentNode.right;
        continue;
      }
    }
    return false;
  }
  remove(value) {
    let nodes = this.tempLookup(value);
    let currentNode = nodes.currentNode;
    let previousNode = nodes.previousNode;
    let previousNodeDirection =
      previousNode.left.value === currentNode.value ? "left" : "right";
    if (false) {
      console.log("Item doesnot exist");
    } else if (currentNode.right === null && currentNode.left === null) {
      if (previousNodeDirection === "left") {
        previousNode.left = null;
        return this;
      }
      previousNode.right = null;
      return this;
    } else if (currentNode.right === null && currentNode.left !== null) {
      if (previousNodeDirection === "left") {
        previousNode.left = currentNode.left;
        return this;
      }
      previousNode.right = currentNode.left;
      return this;
    } else {
      let leftNode = currentNode.left;
      let rightNode = currentNode.right;
      currentNode = currentNode.right;
      if (currentNode.left === null) {
        currentNode.left = leftNode;
        if (previousNodeDirection === "left") {
          previousNode.left = currentNode;
          return this;
        }
      } else {
        let tempPrevNode = null;
        while (true) {
          tempPrevNode = currentNode;
          currentNode = currentNode.left;
          if (currentNode.left === null) {
            break;
          }
        }
        tempPrevNode.left = currentNode.right;
        if (previousNodeDirection === "left") {
          previousNode.left = currentNode;
          currentNode.left = leftNode;
          currentNode.right = rightNode;
          return this;
        }
        previousNode.right = currentNode;
        currentNode.left = leftNode;
        currentNode.right = rightNode;
        return this;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(170);
