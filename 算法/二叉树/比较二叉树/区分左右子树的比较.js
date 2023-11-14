function Root(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
}


const a1 = new Root('a');
const b1 = new Root('b');
const c1 = new Root('c');
const d1 = new Root('d');
const e1 = new Root('e');
const f1 = new Root('f');
const g1 = new Root('g');

a1.leftChild = b1;
a1.rightChild = c1;
b1.leftChild = d1;
b1.rightChild = e1;
c1.leftChild = f1;
c1.rightChild = g1;


const a2 = new Root('a');
const b2 = new Root('b');
const c2 = new Root('c');
const d2 = new Root('d');
const e2 = new Root('e');
const f2 = new Root('f');
const g2 = new Root('g');

a2.rightChild = b2;
a2.leftChild = c2;
b2.leftChild = d2;
b2.rightChild = e2;
c2.leftChild = f2;
c2.rightChild = g2;

/**
 * 在区分左右子树的情况下，比较两个树是否相等
 * @param {*} root1 根节点1
 * @param {*} root2 根节点2
 */
function compare(root1, root2) {
    if (root1 === root2) return true;
    if (root1 === null && root2 !== null || root1 !== null && root2 === null) return false;
    if (root1.value !== root2.value) return false;
    return compare(root1.leftChild, root2.leftChild) && compare(root1.rightChild, root2.rightChild)
}

console.log(compare(a1, a2))