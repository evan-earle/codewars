// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// Answer

function getSize(width, height, depth) {
  let arr = [];
  arr.push(2 * width * height + 2 * width * depth + 2 * height * depth);
  arr.push(width * height * depth);
  return arr;
}
