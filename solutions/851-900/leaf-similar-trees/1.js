/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = function (root1, root2) {
    return getLeaves(root1).toString() === getLeaves(root2).toString();
};

function getLeaves(root) {
    const res = [];
    function get(node, out) {
        if (node.left !== null) get(node.left, out);
        if (node.right !== null) get(node.right, out);
        if (node.left === null && node.right === null) out.push(node.val);
    }
    get(root, res);
    return res;
}
