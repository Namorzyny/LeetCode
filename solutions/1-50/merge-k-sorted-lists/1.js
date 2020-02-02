/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];
    const next = [];
    for (let i = 1; i < lists.length; i += 2) next.push(merge2Lists(lists[i - 1], lists[i]));
    if (lists.length % 2) next.push(lists[lists.length - 1]);
    return mergeKLists(next);
};

function merge2Lists(l1, l2) {
    if (l1 === null && l2 === null) return null;
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    if (l1.val > l2.val) [l1, l2] = [l2, l1];
    let p1 = l1;
    let p2 = l2;
    while (p2 !== null) {
        if (p1.val <= p2.val && (p1.next ? p1.next.val : Infinity) > p2.val) {
            const node = new ListNode(p2.val);
            node.next = p1.next;
            p1.next = node;
            p2 = p2.next;
        } else {
            p1 = p1.next;
        }
    }
    return l1;
}
