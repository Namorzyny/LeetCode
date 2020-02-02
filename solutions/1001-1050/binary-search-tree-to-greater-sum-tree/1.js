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
const bstToGst = function (root) {
    let sum = 0;
    const f = node => {
        if (node.right) f(node.right);
        sum += node.val;
        node.val = sum;
        if (node.left) f(node.left);
    };
    f(root);
    return root;
};
