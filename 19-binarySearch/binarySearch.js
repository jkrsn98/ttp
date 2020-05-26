class MySolution {
  constructor() {
    this.flag = false;
  }

  binarySearch(nums, target) {
    let search = function(nums, target, start, end){
      if (start > end) return false;
      let mid = Math.floor((start + end)/2);
      if (nums[mid]===target) return true;
      if(nums[mid] > target)
        return search(nums, target, start, mid-1);
      else
        return search(nums, target, mid+1, end);
    }
    if (search(nums, target, 0, nums.length-1)) return true
    return false
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
