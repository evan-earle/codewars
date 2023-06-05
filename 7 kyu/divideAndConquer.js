// Divide and Conquer

// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

// Answer

function divCon(x) {
  let regInt = 0;
  let stringInt = 0;
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "string") {
      stringInt += Number(x[i]);
    } else {
      regInt += x[i];
    }
  }
  return regInt - stringInt;
}

divCon([1, 2, 3, "1", "2", "3"]);
