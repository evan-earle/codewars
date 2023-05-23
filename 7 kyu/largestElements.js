// Largest Elements

// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

// Answer

function largest(n, array) {
  let sortedArray = array.sort((a, b) => a - b);

  let topElements = sortedArray.splice(
    sortedArray.length - n,
    sortedArray.length
  );
  return topElements;
}

// largest(0, [7, 6, 5, 4, 3, 2, 1]);
largest(0, [9, 1, 50, 22, 3, 13, 2, 63, 5]);
