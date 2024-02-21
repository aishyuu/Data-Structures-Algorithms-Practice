// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.
function sumTo(n) {
    if(n == 1) {
        return n
    }
    else {
        return n + sumTo(n - 1);
    }
}

console.log(sumTo(100));