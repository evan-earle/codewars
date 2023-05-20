// Given an integer n and two other values, build an array of size n filled with these two values alternating.

// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []

// Answer

function alternate(n, firstValue, secondValue) {
  let arr = [];
  if (n === 1) {
    arr.push(firstValue);
  }

  for (i = 0; i <= n; i++) {
    if (arr.length - 1 === n) {
      arr.pop();
    }
    if (arr.length < n) {
      arr.push(firstValue);
      arr.push(secondValue);
    }
  }
  return arr;
}
