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
    let curr = head;
    while (curr !== null) {
        while (curr.next.val === val) curr.next = curr.next.next;
        curr = curr.next;
    }
    return head.val === val ? head.next : head;
};
