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
Check if the length is 1:
    If length of array is 1 and value is not what we're looking for, return null
    Else, return 1

We divide length by 2 and round down.
    If the value of middle index is the value we're looking for, return the index

If not:
    If the value of what we're looking for larger than the value in the center
        Run the function again from center to end of array.
    Else
        Run the function again from index 0 to the center of array.
*/

