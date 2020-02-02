/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
    if (head === null) return null;
    remove(head, val);
    return head.val === val ? head.next : head;
};

function remove(node, val) {
    if (node.next !== null) while ((node.next || {}).val === val) node.next = node.next.next;
    if (node.next !== null) remove(node.next, val);
}
