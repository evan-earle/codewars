// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]

// Answer

function smaller(nums) {
  let newNums = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    newNums.push(count);
  }
  return newNums;
}
smaller([5, 4, 3, 2, 1]);
smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]);
