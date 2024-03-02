// Sum all numbers
function sumRange(n) {
  if (n == 1) {
    return 1;
  }
  return n + sumRange(n - 1);
}

console.log(sumRange(3));

// Power Function
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}

console.log(power(2, 4));

// Calculate factorial
function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

// Product of an array
function productOfArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  let a = arr.shift();
  return a * productOfArray(arr);
}

console.log(productOfArray([1, 2, 3, 10]));

// Check all values in an array
function checkAllVals(arr, check) {
  if (arr.length === 1) {
    return check(arr[0]);
  }
  if (check(arr.pop())) {
    return checkAllVals(arr, check);
  }
  return false;
}

console.log(
  checkAllVals([1, 2, 5, 9], function (num) {
    return num < 7;
  })
);

//Search JS Object
function searchObject(obj, val) {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      return searchObject(obj[key], val);
    }
    if (obj[key] == val) {
      return true;
    }
  }
}
var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

console.log(searchObject(nestedObject, 44));

// Parse a multi-dimensional array
function totalIntegers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      totalIntegers(arr[i]);
    } else {
      console.log(arr[i]);
    }
  }
}
console.log("HERE START AHHHHHHH");
totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]);

// Sum Squares
// Sums squares of numbers in list that contains more list.
function sumSquares(arr) {
  let value = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      value += sumSquares(arr[i]);
    } else {
        value += arr[i] * arr[i]
    }
  } return value
}

console.log(sumSquares([10,[[10],10],[10]]))
console.log(sumSquares([[[[[[[[[1]]]]]]]]] ))
console.log(sumSquares([[1,2],3]))