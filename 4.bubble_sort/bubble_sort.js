/*
    Bubble Sort Idea:
        We go through the array n times
        we iterate through array and if the next index is smaller than current, switch
        On first iteration, we will find the largest value in the array
        On the next iterations, we will find the second, and third largest, etc.
        We will end up with a sorted array
*/

/* 
    PseudoCode:
        For length of array
            For length of array
                if current index > next index
                    switch values`
*/

/**
 * @constructor
 * @param {Int32Array} arr - Unsorted array
 */
function bubble_sort(arr) {
  let from_final = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - from_final; j++) {
        if(arr[j] > arr[j+1]){
            let c = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = c
        }
    }
    from_final += 1
  }
  return(arr)
}

console.log(bubble_sort([1,3,7,4,2]))