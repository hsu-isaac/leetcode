/*

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.


Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

*/

var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0);
  let res = head;
  let carry = 0;
  let sum = 0;

  while (l1 != null || l2 != null || sum > 0) {
    if (l1 != null) {
      sum = sum + l1.val;
      l1 = l1.next
    }
    if (l2 != null) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    res.next = new ListNode(sum);
    res = res.next;

    sum = carry;
    carry = 0;
  }

  return head.next;
};


var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0);
  let res = head;
  let carry = 0;
  let sum = 0;

  while (l1 != null || l2 != null || sum > 0) {
    if (l1 != null) {
      sum = sum + l1.val;
      l1 = l1.next;
    } if (l2 != null) {
      sum = sum + l2.val;
      l2 = l2.next;
    } if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    res.next = new ListNode(sum);
    sum = carry;
    carry = 0;
    res = res.next;
  }

  return head.next;
};
