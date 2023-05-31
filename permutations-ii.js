/*

Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.


Example 1:
Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]

Example 2:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

*/

var permuteUnique = function (nums) {
  let res = [];
  nums.sort();
  dfs(nums, res, new Set());

  function dfs(nums, res, visited) {
    if (nums.length == visited.size) {
      let arr = [];
      for (let idx of visited) {
        arr.push(nums[idx]);
      }
      res.push(arr);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == nums[i - 1] && !visited.has(i - 1)) {
        continue;
      }
      if (visited.has(i)) {
        continue;
      }
      visited.add(i);
      dfs(nums, res, visited);
      visited.delete(i);
    }
  }

  return res
};
