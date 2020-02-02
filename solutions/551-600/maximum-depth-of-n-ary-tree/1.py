"""
# Definition for a Node.
class Node(object):
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""
class Solution(object):
    def maxDepth(self, root):
        """
        :type root: Node
        :rtype: int
        """
        if root is None:
            return 0
        if not root.children:
            return 1
        depth = 0
        for node in root.children:
            depth = max(self.maxDepth(node) + 1, depth)
        return depth
