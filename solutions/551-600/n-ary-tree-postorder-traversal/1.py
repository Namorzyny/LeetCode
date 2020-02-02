"""
# Definition for a Node.
class Node(object):
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""
class Solution(object):
    def postorder(self, root):
        """
        :type root: Node
        :rtype: List[int]
        """
        if root is None:
            return []
        return self.traversal(root, [])

    def traversal(self, root, l):
        for node in root.children:
            self.traversal(node, l)
        l.append(root.val)
        return l
