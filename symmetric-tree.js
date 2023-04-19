/*

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:
Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:
Input: root = [1,2,2,null,3,null,3]
Output: false

*/

var isSymmetric = function (root) {
  if (!root) {
    return true;
  }

  return isEqual(root.left, root.right);
};

var isEqual = function (left, right) {
  if ((!left && right) || (left && !right) || (left && right && left.val !== right.val)) {
    return false
  }
  if (left && right) {
    return isEqual(left.left, right.right) && isEqual(left.right, right.left)
  }
  return true;
}
