// Remove duplicates from list

// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Answer

function distinct(a) {
  return a.filter((item, index) => a.indexOf(item) === index);
}

distinct([1, 3, 4, 3, 1, 5, 6, 7, 4]);
