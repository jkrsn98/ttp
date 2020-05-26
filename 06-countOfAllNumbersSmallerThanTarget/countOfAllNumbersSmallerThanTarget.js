function countOfAllNumbersSmallerThanTarget(nums, target) {
  let numOfSmaller = 0
  nums.forEach(val => {
      val<target?numOfSmaller++:numOfSmaller;
  })
  return numOfSmaller
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
