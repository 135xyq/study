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
var levelOrder = function(root) {
    if (root === null || root.length === 0) {
        return [];
    }
    let array = new Array();
    array.push(root.left);
    array.push(root.right);
    while (array.length > 0) {

    }

};