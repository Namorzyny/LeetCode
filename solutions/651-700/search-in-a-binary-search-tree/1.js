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
const searchBST = function (root, val) {
    if (root !== null) {
        if (root.val > val) return searchBST(root.left, val);
        else if (root.val < val) return searchBST(root.right, val);
        return root;
    } return [];
};
