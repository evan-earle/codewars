// Name Shuffler

// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

// Answer

// function nameShuffler(str) {
//   let backwardsName = [];
//   let nameInArray = [str.split(" ")[0], str.split(" ")[1]];
//   backwardsName[0] = nameInArray[1];
//   backwardsName[1] = nameInArray[0];
//   let newName = backwardsName.toString().replace(",", " ");
//   return newName;
// }

function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}

nameShuffler("John McClane");
