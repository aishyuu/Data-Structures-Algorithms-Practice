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
  if (arr.length == 1) {
    return check(arr[0]);
  }
  if (check(arr.pop())) {
    return checkAllVals(arr, check);
  }
}

console.log(
  checkAllVals([1, 2, 9], function (num) {
    return num < 7;
  })
);
