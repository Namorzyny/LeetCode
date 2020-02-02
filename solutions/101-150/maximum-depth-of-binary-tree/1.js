/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
    if (root === null) return 0;
    return Math.max(maxDepth(root ? root.left : 0), maxDepth(root ? root.right : 0)) + 1;
};
