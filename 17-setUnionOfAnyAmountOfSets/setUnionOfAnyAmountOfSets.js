function setUnionOfAnyAmountOfSets(...args) {
  let unionSet = new Set()
  args.forEach(val =>{
    for (let item of val)
      unionSet.has(item)?unionSet:unionSet.add(item)
  })
  return unionSet
}
// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
