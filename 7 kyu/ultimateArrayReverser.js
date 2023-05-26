// Ultimate Array Reverser

// Task
// Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.

// Example:
// Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
// Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}
// Good luck!

// Answer

const ultimateReverse = (str) => {
  let res = [];
  let reverseStr = str.join("").split("").reverse().join("");

  for (let i = 0; i < str.length; i++) {
    res.push(reverseStr.slice(0, str[i].length));
    reverseStr = reverseStr.slice(str[i].length);
  }
  return res;
};

ultimateReverse(["I", "like", "big", "butts", "and", "I", "cannot", "lie!"]);
