/*
    Context on Problem:
    You have a building with n number of floors. You have 2 crystal balls that break at a certain floor
    Find the first floor that breaks it in the most optimal way.

    Idea for this problem:
    So you have an list of N length and it has 2 options.
    0: ball dropped from here did not break
    1: ball dropped from here did break
    The first logical way you would solve this is to start from floor 1 and drop it
        If it didn't break, you go up a floor and try again.
        This is really inefficient...
    Now that we have binary search under our belt, we can do this in a faster way.
    The idea is that we divide the floors by 2
        If at the halfway point it breaks, we can assume the ball breaks before low and high
    HOWEVER, we can take this a step further by having a smaller jump.
        We can do something like the square root of the number of floors.
*/

/*
    Pseudocode
    Input: array

    Calculate a jump amount: take square root of length of array and floor it
    Now for the length of the array, and us jumping by the jump amount
        If it breaks, get out of the for loop.

    Now we jump back one jump
    Go from the jump back to the currnet jump and check if it breaks.
    (What should happen is that we're covering the border between not breaking and breaking)
*/

/**
 * Two Crystal Balls Problem
 * @constructor
 * @param {int32Array} building - Array representing building floors
 */
function two_crystal_balls(building) {
  const jumpAmount = Math.floor(Math.sqrt(building.length));

  let i = jumpAmount;
  for (; i < building.length; i += jumpAmount) {
    if (building[i]) {
      break;
    }
  }
  i -= jumpAmount;

  for (let j = 0; j < jumpAmount && i < building.length; j++, i++) {
    if (building[i]) {
      return i;
    }
  }
}
