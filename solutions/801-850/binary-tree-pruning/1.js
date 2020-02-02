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
const pruneTree = function (root) {
    findChild(root);
    return root;
};

function findChild(node) {
    if (node.left !== null) findChild(node.left);
    if (node.right !== null) findChild(node.right);
    removeChild(node);
}

function removeChild(node) {
    if (node.left !== null) if (shouldRemove(node.left)) node.left = null;
    if (node.right !== null) if (shouldRemove(node.right)) node.right = null;
}

function shouldRemove(node) {
    if (node.left !== null) if (!shouldRemove(node.left)) return false;
    if (node.right !== null) if (!shouldRemove(node.right)) return false;
    if (node.val === 1) return false;
    return true;
}
