function Node(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('a');
const f = new Node('a');
const g = new Node('a');

a.leftChild = b;
a.rightChild = c;
b.leftChild = d;
b.rightChild = e;
c.leftChild = f;
c.rightChild = g;

/**
 * 深度优先搜索
 * @param {*} root 二叉树的根节点
 * @param {*} target 要查找的值
 * @returns true | false
 */
function dfs(root, target) {
    console.log(root)
    if (root === null) return false;
    if (root.value === target) return true;
    const left = dfs(root.leftChild, target);
    const right = dfs(root.rightChild, target);
    return left || right;
}

console.log(dfs(a, 'a'))