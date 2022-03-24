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

a2.leftChild = b2;
a2.rightChild = c2;
b2.leftChild = d2;
b2.rightChild = e2;
c2.leftChild = f2;
f2.leftChild = g2;
// c2.rightChild = g2;

/**
 * 找出两棵树不同的地方
 * @param {*} root1 
 * @param {*} root2 
 * @param {array} diffList 存放不同的数组
 */
function diff(root1, root2, diffList) {
    if (root1 === root2) return diffList
    if (root1 === null && root2 !== null) {
        return diffList.push({ type: '新增', origin: null, now: root2 });
    } else if (root1 !== null && root2 === null) {
        return diffList.push({ type: '删除', origin: root1, now: null });
    } else if (root1.value !== root2.value) {
        return diffList.push({ type: '修改', origin: root1, now: root2 });
        diff(root1.leftChild, root2.leftChild, diffList);
        diff(root1.rightChild, root2.rightChild, diffList);
    }
    diff(root1.leftChild, root2.leftChild, diffList);
    diff(root1.rightChild, root2.rightChild, diffList);
}

let diffList = [];

diff(a1, a2, diffList);

console.log(diffList)