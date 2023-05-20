// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// Answer

function last(x) {
  let xArr = x.split(" ");
  let sortedArr = xArr.sort((a, b) => {
    let lastA = a.charAt(a.length - 1);
    let lastB = b.charAt(b.length - 1);
    if (lastA > lastB) {
      return 1;
    } else if (lastA < lastB) {
      return -1;
    } else {
      return 0;
    }
  });
  return sortedArr;
}

last("man i need a taxi up to ubud");
// ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
