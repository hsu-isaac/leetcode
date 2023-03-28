/*
Given an integer x, return true if x is a
palindrome
, and false otherwise.



Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


Constraints:

-231 <= x <= 231 - 1


Follow up: Could you solve it without converting the integer to a string?
*/

/*

Solution
1) Could transform into string and use string methods to split, reverse, join and compare the end values
2) Solution to keep values as int would involve using modulo to find the last digit, add that to the reverse number, and reduce the original number

*/

var isPalindrome = function (x) {
  if (x < 0) {
    return false
  }
  let value = x
  let reversed = 0

  while (value > 0) {
    reversed = (reversed * 10) + (value % 10);
    value = parseInt(value/10);
  }

  return reversed == x
};
