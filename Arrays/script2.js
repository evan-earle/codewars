function sortByLength(array) {
  console.log(array.sort((a, b) => a.length - b.length));
}

sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]);
