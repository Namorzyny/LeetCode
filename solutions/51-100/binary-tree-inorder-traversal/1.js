/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function (root) {
    if (root === null) return [];
    const res = [];
    traversal(root, res);
    return res;
};

function traversal(node, out) {
    if (node.left !== null) traversal(node.left, out);
    out.push(node.val);
    if (node.right !== null) traversal(node.right, out);
}
