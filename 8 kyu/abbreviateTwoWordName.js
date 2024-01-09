// Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// Answer

function abbrevName(name) {
  const word = name.split(" ");
  const newWord = word.map((name) => name.slice(0, 1).toUpperCase());
  return newWord.join(".");
}

console.log(abbrevName("Sam Harris"));
