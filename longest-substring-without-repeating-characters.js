/*

Given a string s, find the length of the longest
substring
 without repeating characters.



Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

var lengthOfLongestSubstring = function (s) {
  let map = new Map();
  let left = 0;
  let maxSize = 0;

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      left = Math.max(map.get(s[i]) + 1, left)
    }
    map.set(s[i], i);
    maxSize = Math.max(i - left + 1, maxSize)
  }

  return maxSize;
};
