function sumOfAllEvenNumbers(nums) {
  let sum=0
  nums.forEach(val => {
    val%2===0? sum++: sum
  })
  return sum
}

let arr = [0,1,2,3,4,5,6,7,8]
console.log(sumOfAllEvenNumbers(arr))
// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
