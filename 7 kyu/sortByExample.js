// Sort by Example

// Given an Array and an Example-Array to sort to, write a function that sorts the Array following the Example-Array.

// Assume Example Array catalogs all elements possibly seen in the input Array. However, the input Array does not necessarily
// have to have all elements seen in the Example.

// Example:

// Arr: [1,3,4,4,4,4,5]

// Example Arr: [4,1,2,3,5]

// Result: [4,4,4,4,1,3,5]

// Answer

function exampleSort(arr, exampleArr) {
  let newArr = [];
  for (let i = 0; i < exampleArr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let sortNumber = exampleArr[i];
      if (sortNumber === arr[j]) {
        newArr.push(arr[j]);
      }
    }
  }
  return newArr;
}

exampleSort([1, 3, 4, 4, 4, 4, 5], [4, 1, 2, 3, 5]);
