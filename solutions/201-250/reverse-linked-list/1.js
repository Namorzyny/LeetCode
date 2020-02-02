/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
    if (head === null) return null;
    if (head.next === null) return head;
    const newHead = reverse(head.next, head);
    head.next = null;
    return newHead;
};

function reverse(node, prev) {
    const next = node.next;
    node.next = prev;
    if (next === null) return node;
    return reverse(next, node);
}
