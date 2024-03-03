/**
 * @constructor
 * @param {Int32Array} arr - Array we're trying to solve
 */
function merge(arr) {
  if (arr.length == 1) {
    return arr;
  }
  if (arr.length == 2) {
    if (arr[0] > arr[1]) {
      return [arr[1], arr[0]];
    }
    return [arr[0], arr[1]];
  }
  const m = Math.floor(arr.length / 2);
  const h1 = merge(arr.slice(0, m));
  const h2 = merge(arr.slice(m, arr.length));
  let h1Count = 0;
  let h2Count = 0;
  let result = [];
  while (h1Count < h1.length && h2Count < h2.length) {
    if (h1[h1Count] > h2[h2Count]) {
      result.push(h2[h2Count]);
      h2Count += 1;
    } else {
      result.push(h1[h1Count]);
      h1Count += 1;
    }
  }
  if (h1Count < h1.length) {
    return [...result, ...h1.slice(h1Count, h1.length)];
  }
  if (h2Count < h2.length) {
    return [...result, ...h2.slice(h2Count, h2.length)];
  }
}

console.log(merge([38, 27, 43, 3, 9, 82, 10]));
