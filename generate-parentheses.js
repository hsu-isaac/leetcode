/*

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]

*/

var generateParenthesis = function (n) {
  let result = [];
  let dfs = (left, right, string) => {
    if (string.length == n * 2) {
      result.push(string);
      return;
    }

    if (left < n) {
      dfs(left + 1, right, string + '(')
    }
    if (right < left) {
      dfs(left, right + 1, string + ')')
    }
  }
  dfs(0, 0, '');
  return result;
};
