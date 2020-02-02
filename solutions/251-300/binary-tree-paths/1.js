/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = function (root) {
    if (root === null) return [];
    const res = [];
    check(root, '', res);
    return res.map(p => p.substr(2));
};

function check(node, path, out) {
    path += `->${node.val}`;
    if (node.left === null && node.right === null) out.push(path);
    else {
        if (node.left !== null) check(node.left, path, out);
        if (node.right !== null) check(node.right, path, out);
    }
}
