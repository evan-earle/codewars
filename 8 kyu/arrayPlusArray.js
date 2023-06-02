// Array plus array

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// Answer

function arrayPlusArray(arr1, arr2) {
  let sum1 = arr1.reduce((a, b) => a + b);
  let sum2 = arr2.reduce((a, b) => a + b);
  let sum = sum1 + sum2;
  return sum;
}

arrayPlusArray([1, 2, 3], [4, 5, 6]);
