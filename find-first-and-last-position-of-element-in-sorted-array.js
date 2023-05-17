/*

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:
Input: nums = [], target = 0
Output: [-1,-1]

*/

var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (nums[left] !== target) {
    return [-1, -1]
  }
  let start = left;
  right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1
    }
  }

  return [start, right];
};
