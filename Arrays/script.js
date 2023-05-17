function alternate(n, firstValue, secondValue) {
  let arr = [];
  if (n === 1) {
    arr.push(firstValue);
  }

  for (i = 0; i <= n; i++) {
    if (arr.length - 1 === n) {
      arr.pop();
    }
    if (arr.length < n) {
      arr.push(firstValue);
      arr.push(secondValue);
    }
  }
  return arr;
}
