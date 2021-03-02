// Given an array nums, write a function to move all the zeroes to the end of it while maintaining
// the relative order of the non-zero elements.
// Must do this in place without making a copy of the array
// Minimize the total number of operations

function moveZeroes(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[count++] = nums[i]
    }
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]))