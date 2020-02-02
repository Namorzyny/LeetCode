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
const increasingBST = function (root) {
    if (!root) return null;
    const tree = new TreeNode(undefined);
    let curr = tree;
    const traversal = function (node) {
        if (node.left) traversal(node.left);
        curr.right = new TreeNode(node.val);
        curr = curr.right;
        if (node.right) traversal(node.right);
    };
    traversal(root);
    return tree.right;
};
