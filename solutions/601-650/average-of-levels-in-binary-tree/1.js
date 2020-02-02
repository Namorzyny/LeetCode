/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const averageOfLevels = function (root) {
    if (root === null) return [];
    const nodeCount = [];
    const nodeSum = [];
    count(root, 0, nodeCount, nodeSum);
    return nodeSum.map((sum, i) => sum / nodeCount[i]);
};

function count(root, layer, nodeCount, nodeSum) {
    nodeSum[layer] = (nodeSum[layer] || 0) + root.val;
    nodeCount[layer] = (nodeCount[layer] || 0) + 1;
    if (root.left !== null) count(root.left, layer + 1, nodeCount, nodeSum);
    if (root.right !== null) count(root.right, layer + 1, nodeCount, nodeSum);
}
