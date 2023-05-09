/*

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]

*/

var removeNthFromEnd = function (head, n) {
  let first = head;
  let second = head;
  for (let i = 0; i < n; i++) {
    first = first.next
  }
  if (!first) {
    return head.next
  }
  while (first.next) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return head;
};
