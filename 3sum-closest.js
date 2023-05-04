/*

Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.


Example 1:
Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Example 2:
Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

*/

var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let closest = Infinity

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let localSum = nums[i] + nums[j] + nums[k];
      if (Math.abs(localSum - target) < Math.abs(closest - target)) {
        closest = localSum;
      }
      if (localSum > target) {
        k--;
      } else {
        j++
      }
    }
  }
  return closest;
};
