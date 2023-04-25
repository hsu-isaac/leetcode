/*

Given a string s, return the longest
palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"

*/

var longestPalindrome = function (s) {
  let longest = '';

  for (let i = 0; i < s.length; i++) {
    let palin1 = findingPalindrome(s, i, i);
    let palin2 = findingPalindrome(s, i, i + 1);
    let longerPalin =
      palin1.length > palin2.length ? palin1 : palin2;

    if (longerPalin.length > longest.length) {
      longest = longerPalin;
    }
  }

  return longest;
};

var findingPalindrome = function (str, i, j) {
  while (i >= 0 && j < str.length && str[i] === str[j]) {
    i--
    j++
  }
  return str.slice(i + 1, j)
}
