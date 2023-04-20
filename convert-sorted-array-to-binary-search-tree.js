/*

Given an integer array nums where the elements are sorted in ascending order, convert it to a
height-balanced
 binary search tree.

Example 1:
Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:
Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

*/

var sortedArrayToBST = function (nums) {
  return convertToBST(nums, 0, nums.length - 1)
};

var convertToBST = function (nums, beg, end) {
  if (beg > end) {
    return null;
  }
  let mid = Math.ceil((beg + end) / 2);
  let root = new TreeNode(nums[mid]);

  root.left = convertToBST(nums, beg, mid - 1);
  root.right = convertToBST(nums, mid + 1, end);

  return root;
}
