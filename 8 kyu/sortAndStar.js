// Sort and Star

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return
// the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// Answer

// function twoSort(s) {
//   let sorted = s.sort();
//   let first = sorted[0];
//   let final = "";
//   for (let i = 0; i < first.length; i++) {
//     final += first[i] + "***";
//   }
//  return (final.substring(0, final.length - 3));
// }

function twoSort(s) {
  return s.sort()[0].split("").join("***");
}

twoSort([
  "bitcoin",
  "take",
  "over",
  "the",
  "world",
  "maybe",
  "who",
  "knows",
  "perhaps",
]);
