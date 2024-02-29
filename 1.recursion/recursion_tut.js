function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log(n);
  }
  console.log("Hooray!");
}

function countdownRecursive(n) {
  if (n == 0) {
    console.log("Hooray!");
    return;
  }
  console.log(n);
  countdownRecursive(n - 1);
}

function sumRange(n) {
  let total = 0;
  for (let i = n; i > 0; i--) {
    total += i;
  }
  return total;
}

function sumRangeRecursive(n) {
  if (n == 0) {
    return n;
  }
  return n + sumRangeRecursive(n - 1);
}

const tree = {
  name: "John",
  children: [
    {
      name: "Jim",
      children: [],
    },
    {
      name: "Zoe",
      children: [
        { name: "Kyle", children: [] },
        { name: "Sophia", children: [] },
      ],
    },
  ],
};

function printChildrenRecursive(treeNode) {
  if (treeNode.children.length == 0) {
    return;
  }

  for (let i = 0; i < treeNode.children.length; i++) {
    console.log(treeNode.children[i].name);
    printChildrenRecursive(treeNode.children[i]);
  }
}

function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(4));