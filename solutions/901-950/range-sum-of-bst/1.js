/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const rangeSumBST = function (root, L, R) {
    if (root === null) return 0;
    return root.val < L ? rangeSumBST(root.right, L, R) : root.val > R ? rangeSumBST(root.left, L, R) : root.val + rangeSumBST(root.right, L, R) + rangeSumBST(root.left, L, R);
};
