class Node {
  constructor(val) {
    this.value = val;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  buildTree(arr) {
    this.root = new Node(arr[0]);
    let currentNode = this.root;

    for (let i = 1; i < arr.length; i++) {
      while (true) {
        if (arr[i] >= currentNode.value) {
          if (currentNode.right == null) {
            currentNode.right = new Node(arr[i]);
            break;
          }
          currentNode = currentNode.right;
          continue;
        }
        if (currentNode.left == null) {
          currentNode.left = new Node(arr[i]);
          break;
        }
        currentNode = currentNode.left;
      }
      currentNode = this.root;
    }
  }

  insert(value) {
    let currentNode = this.root;
    if (this.root == null) {
      this.root = new Node(value);
      return;
    }

    while (true) {
      if (value >= currentNode.value) {
        if (currentNode.right == null) {
          currentNode.right = new Node(value);
          break;
        }
        currentNode = currentNode.right;
        continue;
      }
      if (value < currentNode.value) {
        if (currentNode.left == null) {
          currentNode.left = new Node(value);
          break;
        }
        currentNode = currentNode.left;
        continue;
      }
    }
  }
}

let test = new BinarySearchTree();
test.buildTree([10, 7, 5, 9, 13, 16, 19, 14]);

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};
test.insert(17);
prettyPrint(test.root);
