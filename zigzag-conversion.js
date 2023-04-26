/*

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);


Example 1:
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

Example 3:
Input: s = "A", numRows = 1
Output: "A"

*/

var convert = function (s, numRows) {
  const len = s.length;
  if (numRows < 2 || len < numRows) {
    return s;
  }

  const rows = new Array(numRows).fill('');
  let reverse = false;
  let count = 0;

  for (let i = 0; i < len; i++) {
    rows[count] += s[i];
    reverse ? count-- : count++;
    if (count === numRows - 1 || count === 0) {
      reverse = !reverse;
    }
  }

  return rows.join('')
};
