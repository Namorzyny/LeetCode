/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isUnivalTree = function (root) {
    const list = [root];
    do {
        for (let i = list.length; i > 0; i--) {
            const node = list.shift();
            if (node.val !== root.val) return false;
            if (node.left) list.push(node.left);
            if (node.right) list.push(node.right);
        }
    } while (list.length > 0);
    return true;
};
