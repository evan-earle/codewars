// Arithmetic progression

// In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that
// will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

// The result should be a string of numbers, separated by comma and space.

// Example
// # first element: 1, difference: 2, how many: 5
// arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"

// Answer

function arithmeticSequenceElements(a, d, n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += a + ", ";
    a += d;
  }

  return str.slice(0, -2);
}

// arithmeticSequenceElements(1, 2, 5);
// arithmeticSequenceElements(1, 0, 5);
// arithmeticSequenceElements(1, -3, 10);
arithmeticSequenceElements(100, -10, 10);
