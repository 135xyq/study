function Root(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
}


const a = new Root('a');
const b = new Root('b');
const c = new Root('c');
const d = new Root('d');
const e = new Root('e');
const f = new Root('f');
const g = new Root('g');

a.leftChild = b;
a.rightChild = c;
b.leftChild = d;
b.rightChild = e;
c.leftChild = f;
c.rightChild = g;

// 中序遍历
function middleTraversal(root) {
    if (root === null) {
        return;
    }
    middleTraversal(root.leftChild);
    console.log(root.value);
    middleTraversal(root.rightChild);
}

middleTraversal(a)