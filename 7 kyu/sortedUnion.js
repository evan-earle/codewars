// Sorted Union

// Write a function that takes one or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

// Courtesy of FreeCodeCamp, a great place to learn web-dev; plus, its founder Quincy Larson is pretty cool and amicable. I made the original one slightly more
// tricky ;)

function uniteUnique(...arrs) {
  let result = [];
  for (let arr of arrs) {
    for (let elem of arr) {
      if (!result.includes(elem)) {
        result.push(elem);
      }
    }
  }
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4]);
