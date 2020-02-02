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
const deleteDuplicates = function (head) {
    if (head !== null) {
        while (head.next ? head.next.val === head.val : false) head.next = head.next.next;
        if (head.next !== null) deleteDuplicates(head.next);
    }
    return head;
};
