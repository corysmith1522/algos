// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to the target.
// Assume each input would have exactly one solution, and you can't use the same element twice.
// Answer can be returned in any order.

function sumToTarget(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let secondNumber = target - nums[i];
    let solution = nums.indexOf(secondNumber, i + 1);
    if (solution !== -1) {
      return [i, solution];
    }
  }
  return [0, 0]
}

console.log(sumToTarget([3, 2, 4], 6))