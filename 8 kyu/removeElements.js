// Removing Elements

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// Answer

function removeEveryOther(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr.splice(i + 1, 1);
  }
  return arr;
}

removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]);
