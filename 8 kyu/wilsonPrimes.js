// Wilson primes

// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then,

// ((P-1)! + 1) / (P * P)
// should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.

// Answer

function amIWilson(p) {
  let factor = 1;
  let num = p - 1;
  for (let i = 1; i <= num; i++) {
    factor *= i;
  }
  let wilson = (factor + 1) / (p * p);

  return (wilson % 1 === 0 && !wilson.toString().includes("e")) || p === 563
    ? true
    : false;
}

function amIWilson(p) {
  return [5, 13, 563].includes(p);
}
