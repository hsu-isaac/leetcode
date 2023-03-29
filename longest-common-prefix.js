/*

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".



Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


*/

var longestCommonPrefix = function (strs) {
  if (strs === undefined || strs.length === 0) { return ''; }

  return strs.reduce((accumulator, next) => {
    let i = 0;
    while (accumulator[i] && next[i] && accumulator[i] === next[i]) i++;
    return accumulator.slice(0, i);
  });
};
