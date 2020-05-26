function countOfAllBooleans(arr) {
  let numBooleans = 0;
  arr.forEach(val => {
    if(typeof val === "boolean") numBooleans++
  })
  return numBooleans
}

// Do not edit this line;
module.exports = countOfAllBooleans;
