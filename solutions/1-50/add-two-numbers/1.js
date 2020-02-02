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
const addTwoNumbers = function (l1, l2) {
    let h1 = l1;
    let h2 = l2;
    let flag = 0;
    const list = new ListNode(undefined);
    let curr = list;
    while (h1 !== null || h2 !== null) {
        const sum = (h1 === null ? 0 : h1.val) + (h2 === null ? 0 : h2.val) + flag;
        curr.next = new ListNode(sum > 9 ? sum - 10 : sum);
        curr = curr.next;
        flag = 0;
        if (sum > 9) flag = 1;
        h1 = h1 === null ? null : h1.next;
        h2 = h2 === null ? null : h2.next;
    }
    if (flag === 1) curr.next = new ListNode(1);
    return list.next;
};
