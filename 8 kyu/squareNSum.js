// Square(n) Sum

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9

// Answer

function squareSum(numbers) {
  return numbers.reduce((acc, cur) => acc + cur ** 2, 0);
}
