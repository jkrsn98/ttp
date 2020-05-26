function pairSum(nums, target) {
  if(nums.length<=1) throw "length of nums <=1"
  let numsMap = new Map();
      for (let i = 0; i < nums.length; i++) {
          if(numsMap.has(target - nums[i]))
            return true
          else
            numsMap.set(nums[i], i)
      }
  return false
}

// Do not edit this line;
module.exports = pairSum;
