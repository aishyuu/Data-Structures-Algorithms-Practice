// The fibonacci sequence that returns an array
function fibs(val) {
  if (val == 1) {
    return [0];
  }
  if (val == 2) {
    return [0, 1];
  }
  let result = [0, 1];
  for (let i = 2; i < val; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}

console.log(fibs(8))

function fibsRec(val) {
    if(val == 0) return [0]
    if(val == 1) return [0, 1]
    const arr = fibsRec(val - 1)
    return [...arr, arr[val-1] + arr[val-2]]
}
console.log(fibsRec(8))
