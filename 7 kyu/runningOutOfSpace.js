// Running out of space

// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

// Answer

function spacey(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[0]) {
      array[i] = array[i - 1] + array[i];
    }
  }
  return array;
}

spacey(["i", "have", "no", "space"]);
