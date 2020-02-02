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
const swapPairs = function (head) {
    const list = new ListNode();
    list.next = head;
    let curr = list;
    while (curr.next !== null && curr.next.next !== null) {
        const node1 = curr.next;
        const node2 = curr.next.next;
        const node3 = curr.next.next.next;
        curr.next = node2;
        curr.next.next = node1;
        curr.next.next.next = node3;
        curr = curr.next.next;
    }
    return list.next;
};
