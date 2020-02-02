/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
    if (headA === null || headB === null) return null;
    let diff = len(headA) - len(headB);
    while (diff !== 0) {
        if (diff > 0) {
            diff--;
            headA = headA.next;
        } else {
            diff++;
            headB = headB.next;
        }
    }
    while ((headA || {}).val !== (headB || {}).val) {
        headA = headA.next;
        headB = headB.next;
    }
    return headA;
};

function len(head) {
    if (head.next === null) return 1;
    return len(head.next) + 1;
}
