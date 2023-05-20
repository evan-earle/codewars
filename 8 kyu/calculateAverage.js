// Calculate average

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// Answer

function findAverage(array) {
  return array.length ? array.reduce((a, c) => a + c) / array.length : 0;
}

findAverage([1, 2, 3, 4, 5]);
