/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const insertIntoBST = function (root, val) {
    if (root === null) return new TreeNode(val);
    const insert = root.val > val ? 'left' : 'right';
    if (root[insert] === null) root[insert] = new TreeNode(val);
    else insertIntoBST(root[insert], val);
    return root;
};
