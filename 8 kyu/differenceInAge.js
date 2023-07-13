// Find the Difference in Age between Oldest and Youngest Family Members

// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the
// difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an
// ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

// Answer

function differenceInAges(ages) {
  let newArr = [];
  let sorted = ages.sort((a, b) => a - b);
  newArr.push(
    sorted[0],
    sorted[sorted.length - 1],
    sorted[sorted.length - 1] - sorted[0]
  );
  return newArr;
}

differenceInAges([32, 67, 45, 16, 2, 56]);
