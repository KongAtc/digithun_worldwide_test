// find second maximum number
function secondMax(nums) {
  let firstMax = 0
  let secondMax = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > firstMax) {
      secondMax = firstMax
      firstMax = nums[i]
    } else if (nums[i] > secondMax) {
      secondMax = nums[i]
    }
  }
  return secondMax
}

console.log(secondMax([-1, 4, 30, 2, -4]))
