// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// Answer

function digitize(n) {
  let arr = n.toString().split("");
  let newArr = arr.map((num) => Number(num));
  let reverseArr = newArr.reverse();
  return reverseArr;
}

digitize(35231);
