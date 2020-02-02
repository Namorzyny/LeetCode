/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function (root) {
    if (root === null) return true;
    return check(root);
};

function check(node) {
    if (node.left === null && node.right === null) {
        node.depth = 1;
    } else {
        if (node.left !== null) if (!check(node.left)) return false;
        if (node.right !== null) if (!check(node.right)) return false;
        node.depth = Math.max(node.left ? node.left.depth : 0, node.right ? node.right.depth : 0) + 1;
        return Math.abs((node.left ? node.left.depth : 0) - (node.right ? node.right.depth : 0)) < 2;
    }
    return true;
}
