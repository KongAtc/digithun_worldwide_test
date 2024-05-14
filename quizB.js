// find maximum sum
function findSum(nums, k) {
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = i; j < i + k; j++) {
      sum += nums[j]
    }
    if (sum > ans) {
      ans = sum
    }
  }
  return ans
}

console.log(findSum([1, 4, -1, 2, 3], 2))
