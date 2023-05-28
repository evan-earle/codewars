// Sum of positive

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// Answer

function positiveSum(arr) {
  return arr.reduce((a, c) => (c > 0 ? a + c : a), 0);
}

positiveSum([1, -4, 7, 12]);
