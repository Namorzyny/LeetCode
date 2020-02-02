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
const middleNode = function (head) {
    if (!(head || {}).next) return head;
    let middle = head;
    head = head.next;
    while (true) {
        middle = middle.next;
        if (head.next !== null) head = head.next; else break;
        if (head.next !== null) head = head.next; else break;
    }
    return middle;
};
