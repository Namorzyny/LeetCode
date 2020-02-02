/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
    if (check(head, n) < n) return head.next;
    return head;
};

function check(node, n) {
    if (node.next === null) return 0;
    const t = check(node.next, n) + 1;
    if (t === n) {
        node.next = node.next.next;
    }
    return t;
}
