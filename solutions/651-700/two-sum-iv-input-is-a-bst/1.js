/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
const findTarget = function (root, k) {
    if (root === null) return false;
    let found = false;
    forEach(root, value => {
        if (value === k - value) return;
        if (find(k - value, root)) found = true;
    });
    return found;
};

function forEach(root, func) {
    func(root.val);
    if (root.left !== null) forEach(root.left, func);
    if (root.right !== null) forEach(root.right, func);
}

function find(value, root) {
    if (value === root.val) return true;
    if (value < root.val && root.left !== null) return find(value, root.left);
    if (value > root.val && root.right !== null) return find(value, root.right);
    return false;
}
