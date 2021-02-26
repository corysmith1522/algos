// Given an array of integers, find if the array contains any duplicates.
// Function should return true if any value appears at least twice in the array
// Function should return false if every element is distinct

let containsDuplicate = (nums) => {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
}

// console.log(containsDuplicate([1, 2, 3, 4]))

function containsDuplicate2(nums) {
  let newArray = [];
  let duplicate = false;
  for (let i = 0; i < nums.length; i++) {
    if (!newArray.includes(nums[i])) {
      newArray.push(nums[i])
    } else {
      duplicate = true;
      break;
    }
  }
  return duplicate;
}

function duplicate(nums) {
  return nums.length !== new Set(nums).size;
}