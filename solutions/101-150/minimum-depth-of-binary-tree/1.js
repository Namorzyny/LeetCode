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
const minDepth = function (root) {
    if (root === null) return 0;
    return check(root, 1);
};

function check(node, level) {
    if (node.left === null && node.right === null) return level;
    return Math.min(node.left ? check(node.left, level + 1) : Infinity, node.right ? check(node.right, level + 1) : Infinity);
}
