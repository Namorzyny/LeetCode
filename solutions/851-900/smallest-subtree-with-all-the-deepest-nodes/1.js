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
const subtreeWithAllDeepest = function (root) {
    const leafs = [];
    check(root, null, leafs, 0);
    const deepest = leafs.pop();
    while ((new Set(deepest)).size > 1) deepest.forEach((node, i) => deepest[i] = node.parent);
    return deepest[0];
};

function check(node, parent, list, layer) {
    node.parent = parent;
    if (!list[layer]) list[layer] = [];
    if (node.left === null && node.right === null) list[layer].push(node);
    else {
        if (node.left !== null) check(node.left, node, list, layer + 1);
        if (node.right !== null) check(node.right, node, list, layer + 1);
    }
}
