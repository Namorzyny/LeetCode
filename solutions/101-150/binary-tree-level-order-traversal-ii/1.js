/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderBottom = function (root) {
    if (root === null) return [];
    const res = [];
    check(root, 0, res);
    return res.reverse();
};

function check(node, level, out) {
    if (!out[level]) out[level] = [];
    out[level].push(node.val);
    if (node.left !== null) check(node.left, level + 1, out);
    if (node.right !== null) check(node.right, level + 1, out);
}
