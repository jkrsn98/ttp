function productOfAnyAmountOfNumbers(...args) {
  let product = 1
  args.forEach(val => {
    product *= val
  })
  return product
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
