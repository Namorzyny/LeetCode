/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
    let c1 = l1;
    let c2 = l2;
    const n = new ListNode(null);
    let c = n;
    while (c1 !== null || c2 !== null) {
        if (c1 === null) if (c2 !== null) {c.next = c2; break;}
        if (c2 === null) if (c1 !== null) {c.next = c1; break;}
        if (c1.val < c2.val) {
            c.next = c1;
            c1 = c1.next;
        } else {
            c.next = c2;
            c2 = c2.next;
        }
        c = c.next;
    }
    return n.next;
};
