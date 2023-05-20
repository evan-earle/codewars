// Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action.
// Change any instance of "Fire" into "~~". Then return the string.

// function fireFight(s) {
//   let newArr = s.split(" ");
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] === "Fire") {
//       newArr[i] = "~~";
//     }
//   }
//   let newString = newArr.toString().replaceAll(",", " ");

//   return newString;
// }

function fireFight(s) {
  console.log(s.replaceAll("Fire", "~~"));
}

fireFight(
  "Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"
);
