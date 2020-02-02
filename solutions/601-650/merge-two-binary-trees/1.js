/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
const mergeTrees = function (t1, t2) {
    if (t1 === t2 && t1 === null) return null;
    const newTree = new TreeNode((t1 ? t1.val : 0) + (t2 ? t2.val : 0));
    merge(t1, t2, newTree);
    return newTree;
};

function merge(n1, n2, n3) {
    if (n1 === n2 && n1 === null) return;
    n1 = n1 || new TreeNode(undefined);
    n2 = n2 || new TreeNode(undefined);
    if (n1.left !== null || n2.left !== null) {
        const left = (n1.left ? n1.left.val : 0) + (n2.left ? n2.left.val : 0);
        n3.left = new TreeNode(left);
    }
    if (n1.right !== null || n2.right !== null) {
        const right = (n1.right ? n1.right.val : 0) + (n2.right ? n2.right.val : 0);
        n3.right = new TreeNode(right);
    }
    merge(n1.left, n2.left, n3.left);
    merge(n1.right, n2.right, n3.right);
}
