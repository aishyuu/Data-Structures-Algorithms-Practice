function sumRange(n) {
  if (n == 1) {
    return 1;
  }
  return n + sumRange(n - 1);
}

console.log(sumRange(3));

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}

console.log(power(2, 4));

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

function productOfArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  let a = arr.shift()
  return a * productOfArray(arr);
}

console.log(productOfArray([1, 2, 3, 10]));
