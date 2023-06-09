// Sorting Arrays

// Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

// Example 1
// a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
// a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

// returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
// Example 2
// a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin']
// a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']

// returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
// Each element in the arrays will start with a unique letter so there will only be a single match for each element.

// Answer

function sortArray(a1, a2) {
  let a3 = [];
  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      if (a1[i][0] === a2[j][0]) {
        a3.push(a2[j]);
      }
    }
  }
  return a3;
}

sortArray(
  ["giraffe", "orangutan", "impala", "elephant", "rhino"],
  ["rattlesnake", "eagle", "geko", "iguana", "octopus"]
);
//['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
