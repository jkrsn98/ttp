function countOfAllBooleansAndStrings(arr) {
  let numBooleansAndStrings = 0;
  arr.forEach(val => {
    if(typeof val === "boolean" || typeof val === "string" ) numBooleansAndStrings++
  })
  return numBooleansAndStrings
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
