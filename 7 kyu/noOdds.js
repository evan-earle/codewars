// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// Answer

function noOdds(values) {
  return values.filter((x) => x % 2);
}

noOdds([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
