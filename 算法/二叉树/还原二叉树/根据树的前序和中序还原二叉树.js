const front = ['A', 'C', 'F', 'G', 'B', 'D', 'E'];
const middle = ['F', 'C', 'G', 'A', 'D', 'B', 'E'];

function Node(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
}

// 根据树的中序和前序遍历结果还原二叉树
function frontMiddleToTree(front, middle) {
    if (front === null || middle === null || front.length === 0 || middle.length === 0 || front.length !== middle.length) return;
    const root = new Node(front[0]);
    const rootIndex = middle.indexOf(root.value); //在中序遍历中找到根节点的位置
    const frontLeft = front.slice(1, rootIndex + 1); //在前序遍历中的左子树
    const frontRight = front.slice(rootIndex + 1); //在前序遍历中的右子树
    const middleLeft = middle.slice(0, rootIndex); //在中序遍历中的左子树
    const middleRight = middle.slice(rootIndex + 1); // 在中序遍历中的右子树
    root.leftChild = frontMiddleToTree(frontLeft, middleLeft);
    root.rightChild = frontMiddleToTree(frontRight, middleRight);
    return root;
}

console.log(frontMiddleToTree(front, middle))