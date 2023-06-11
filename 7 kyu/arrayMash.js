// Array Mash

// Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays . Both arrays will always be the same length.

// eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']

// Answer

function arrayMash(array1, array2) {
  let array3 = [];
  for (let i = 0; i < array1.length; i++) {
    array3.push(array1[i], array2[i]);
  }
  return array3;
}

arrayMash([1, 2, 3], ["a", "b", "c"]);
