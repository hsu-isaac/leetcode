/*

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = ""
Output: []

Example 3:
Input: digits = "2"
Output: ["a","b","c"]

*/

var letterCombinations = function (digits) {
  let length = digits.length;
  let res = [];

  if (!length) {
    return []
  };

  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqr',
    8: 'tuv',
    9: 'wxyz',
  }

  const go = (pos, string) => {
    if (pos === length) {
      res.push(string);
    } else {
      let letters = map[digits[pos]]
      for (let i = 0; i < letters.length; i++) {
        go(pos + 1, string + letters[i])
      }
    }
  };

  go(0, '');
  return res;
};
