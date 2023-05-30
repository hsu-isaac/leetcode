/*

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: nums = [1]
Output: [[1]]

*/

var permute = function (letters) {
  let res = [];
  dfs(letters, [], Array(letters.length).fill(false), res);

  function dfs(letters, path, used, res) {
    if (path.length == letters.length) {
      res.push(Array.from(path));
      return;
    }
    for (let i = 0; i < letters.length; i++) {
      if (used[i]) {
        continue;
      }
      path.push(letters[i]);
      used[i] = true;
      dfs(letters, path, used, res);
      path.pop();
      used[i] = false;
    }
  }

  return res;
};
