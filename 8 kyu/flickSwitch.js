// Flick Switch

// Task
// Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the
// opposite boolean value.

// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
// Notes
// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.

// Answer

function flickSwitch(arr) {
  let flick = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "flick") {
      if (flick === false) {
        flick = true;
      } else {
        flick = false;
      }
    }
    arr[i] = flick;
  }
  return arr;
}

//flickSwitch(["codewars", "flick", "code", "wars"]);
//flickSwitch(["flick", "chocolate", "adventure", "sunshine"]);
//flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]);
//flickSwitch(["flick", "flick", "flick", "flick", "flick"]);
//flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]);
flickSwitch(["codewars", "flick", "code", "wars"]);
