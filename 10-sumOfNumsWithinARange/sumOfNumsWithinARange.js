function sumOfNumsWithinARange(nums, start, end) {
  let sum=0
  nums.forEach(val => {
    (val>=start && val<=end)? sum++ : sum
  })
  return sum
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
