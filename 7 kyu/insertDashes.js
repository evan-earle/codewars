// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num.
// For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

// Answer

function insertDash(num) {
  let numArray = num.toString().split("");

  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i + 1] % 2 && numArray[i] % 2) {
      numArray[i] = numArray[i] + "-";
    }
  }

  return numArray.join("");
}

insertDash(4547931);
