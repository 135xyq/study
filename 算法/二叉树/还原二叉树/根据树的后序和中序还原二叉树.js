const middle = ['F', 'C', 'G', 'A', 'D', 'B', 'E'];
const last = ['F', 'G', 'C', 'D', 'E', 'B', 'A'];

function Node(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
}


// 根据树的中序和后序遍历结果还原二叉树
function middleLastToTree(middle, last) {
    if (middle === null || last === null || middle.length === 0 || last.length === 0 || middle.length !== last.length) return;
    const root = new Node(last[last.length - 1]);
    const rootIndex = middle.indexOf(root.value); //找到根节点在中序遍历中的位置
    const lastLeft = last.slice(0, rootIndex);
    const lastRight = last.slice(rootIndex, last.length - 1);
    const middleLeft = middle.slice(0, rootIndex);
    const middleRight = middle.slice(rootIndex + 1);
    root.leftChild = middleLastToTree(middleLeft, lastLeft);
    root.rightChild = middleLastToTree(middleRight, lastRight);
    return root;
}

console.log(middleLastToTree(middle, last));