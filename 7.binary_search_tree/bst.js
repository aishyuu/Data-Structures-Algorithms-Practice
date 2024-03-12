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

  deleteNode(val, root = this.root) {
    if (root == null) {
      return root;
    }

    if (val > root.value) {
      root.right = this.deleteNode(val, root.right);
      return root;
    } else if (val < root.value) {
      root.left = this.deleteNode(val, root.left);
      return root;
    }

    if (root.left == null) {
      let temp = root.right;
      root = null;
      return temp;
    } else if (root.right == null) {
      let temp = root.left;
      root = null;
      return temp;
    } else {
      let succParent = root;

      let succ = root.right;
      while (succ.left != null) {
        succParent = succ;
        succ = succ.left;
      }

      if (succParent != root) {
        succParent.left = succ.right;
      } else {
        succParent.right = succ.right;
      }

      root.value = succ.value;

      succ = null;
      return root;
    }
  }

  find(val) {
    let currentNode = this.root;
    while (true) {
      if (currentNode == null) {
        console.log(`Could not find ${val}`);
        return;
      }
      if (val > currentNode.value) {
        currentNode = currentNode.right;
      } else if (val < currentNode.value) {
        currentNode = currentNode.left;
      } else if (val == currentNode.value) {
        return currentNode;
      }
    }
  }

  levelOrder() {
    if (this.root == null) return [];
    const queue = [this.root];
    const results = [];
    while (queue.length) {
      let level = [];
      let size = queue.length;
      for (let i = 0; i < size; i++) {
        const node = queue.shift();
        level.push(node.value);
        if (node.left != null) {
          queue.push(node.left);
        }
        if (node.right != null) {
          queue.push(node.right);
        }
      }
      results.push(level);
    }
    return results;
  }

  preOrder() {
    // root, left, right
    if (this.root == null) {
      return [];
    }
    const stack = [this.root];
    const results = [];
    while (stack.length) {
      const node = stack.pop();
      if (node.right != null) {
        stack.push(node.right);
      }
      if (node.left != null) {
        stack.push(node.left);
      }
      results.push(node.value);
    }
    return results;
  }

  inOrder(node = this.root, result = []) {
    if(this.root != null) {
        return [];
    }
    if(node == null) {
        return;
    }
    this.inOrder(node.left, result);
    this.inOrder(node.right, result);
    if(result) return result;
  }

  postOrder() {
    if(this.root == null) {
        return [];
    }
    const stack = [this.root];
    const results = [];
    while(stack.length) {
        const node = stack.pop();
        if(node.left != null) {
            stack.push(node.left);
        }
        if(node.right != null) {
            stack.push(node.right);
        }
        results.push(node.key);
    }
    return results.reverse();
  }

  height(node = this.root) {
    if(node == null) {
        return -1;
    }
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth(node, root = this.root, level = 0) {
    if (node == null) {
        return null;
    }

    if(root == null) {
        return 0;
    }

    if(root.value == node.value) {
        return level;
    }

    let count = this.depth(node, root.left, level + 1);
    if(count != 0) {
        return count;
    }
    return this.depth(node, root.right, level + 1);
  }

  isBalanced(node = this.root) {
    if (node == null) {
        return true;
    }
    const heightDiff = Math.abs(this.height(node.left) - this.height(node.right));
    return(heightDiff <= 1 && this.isBalanced(node.left) && this.isBalanced(node.right));
  }

  rebalance() {
    if(this.root == null) {
        return;
    }
    const sorted = [...new Set(this.inOrder().sort((a, b) => a-b))]
    this.root = this.buildTree(sorted);
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
test.deleteNode(16);
prettyPrint(test.root);
console.log(test.levelOrder());
