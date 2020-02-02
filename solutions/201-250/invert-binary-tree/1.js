/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
    if (root === null) return null;
    [root.left, root.right] = [root.right, root.left];
    if (root.left !== null) invertTree(root.left);
    if (root.right !== null) invertTree(root.right);
    return root;
};
