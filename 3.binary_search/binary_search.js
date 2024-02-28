/*
Binary Search Idea:
The idea of binary search is to take an array, divide it into 2
Then, we check if the value in the middle is less or greater than the value we're looking for.
If less, we do it again, but this time with the array from index 0 to the index of the center.
If more, we do it again with the array from index of center to end of array.
We repeat this until we either get the value we want, or the range of the array is 1
    and the value that's left is not the number we're looking for.

In terms of time complexity, we're dividing the problem by 2 with each iteration
Now with that alone we have 2 options O(nlogn) or (logn)
The biggest difference between O(nlogn) and O(logn) is
    O(nlogn) implies that on every division, we check everything inside it
    O(logn) implies that we only check one value on every division

Since we're not checking everything on every division, the time complexity of binary search is O(logn)
*/

/*
Pseudo Code:
index = 0
posChange = True

In while Loop:
We're given an array and the number we want to find
Divide length of array by 2 and round down (index_check)
If posChange is true
    index += index_check
else
    index -= index_check
if arr[index_check] == 9
    return index
if 9 < arr[index_check]
    arr = arr[0:index_check]
else
    arr = arr[index_check:arr.length]
*/
/**
 * Binary Search
 * @constructor
 * @param {Int32Array} arr - Array of numbers
 * @param {Number} low - The starting index of the split array
 * @param {Number} high - The last index of the split array
 * @param {Number} val - Value we're trying to find
 */
function binary_search(arr, low, high, val) {
  while (true) {
    if (low == high) {
      if (arr[low] == val) {
        return low;
      }
      return null;
    }

    const mid = Math.floor(high - (high - low) / 2);

    if (arr[mid] == val) {
      return mid;
    }

    if (arr[mid] < val) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}

const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const test = binary_search(arr, 0, arr.length - 1, 2);
console.log(test);
if (test == null) {
  console.log("Not found");
} else {
  console.log(arr[test]);
}


// Course Version
/**
 * Binary Search Course Version
 * @constructor
 * @param {int32Array} haystack - Array of numbers
 * @param {Number} needle - Number you're trying to find
 */
function binary_search_ver2(haystack, needle) {
  let lo = 0
  let hi = haystack.length;

  do {
    const m = Math.floor(lo + (hi - lo) / 2);
    const v = haystack[m];

    if(v === needle) {
      return true;
    } else if(v > needle) {
      hi = m;
    } else {
      lo = m + 1;
    }
  } while(lo < hi);

  return false;
}

const test2 = binary_search_ver2(arr, 5);
console.log(test2)
console.log(arr[test2])