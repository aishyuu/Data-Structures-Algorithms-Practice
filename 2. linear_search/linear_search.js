// Takes array of integers, and returns index of the number you're trying to find
// Time complexity: O(n)

function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return true;
    }
  }
  return false;
}
