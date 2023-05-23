/*

Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.


Example 1:
Input: candidates = [10,1,2,7,6,1,5], target = 8
Output:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]

Example 2:
Input: candidates = [2,5,2,1,2], target = 5
Output:
[
[1,2,2],
[5]
]

*/

var combinationSum2 = function (candidates, target) {
  if (!candidates || candidates.length == 0) {
    return [];
  }
  let res = [];
  candidates.sort((a, b) => a - b);

  helper(0, [], 0);
  return res;

  function helper(currentSum, cur, idx) {
    if (currentSum == target) {
      res.push([...cur]);
      return;
    }
    if (currentSum > target) {
      return;
    }
    for (let i = idx; i < candidates.length; i++) {
      if (i != idx && candidates[i] == candidates[i - 1]) {
        continue;
      }
      cur.push(candidates[i]);
      helper(currentSum + candidates[i], cur, i + 1);
      cur.pop();
    }
  }
};
