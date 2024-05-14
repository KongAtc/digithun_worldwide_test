// find maximum number
function max(nums) {
  let currentMax = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > currentMax) {
      currentMax = nums[i]
    }
  }
  return currentMax
}

console.log(max([-1, 4, 30, 2, -4]))
