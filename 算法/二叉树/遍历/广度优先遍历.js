function Node(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');

a.leftChild = b;
a.rightChild = c;
b.leftChild = d;
b.rightChild = e;
c.leftChild = f;
c.rightChild = g;

/**
 * 广度优先搜索
 * @param {array} rootList 根节点数组
 * @param {*} target 要查询的值
 * @return true | false
 */
function bfs(rootList, target) {
    if (rootList == null || rootList.length === 0) return false;
    let childrenList = []; //存放子节点
    for (let i = 0; i < rootList.length; i++) {
        if (rootList[i] !== null && rootList[i].value === target) {
            return true;
        } else {
            if (rootList[i].leftChild) {
                childrenList.push(rootList[i].leftChild);
            }
            if (rootList[i].rightChild) {
                childrenList.push(rootList[i].rightChild);
            }

        }
    }
    return bfs(childrenList, target);
}

console.log(bfs([a], 'a'))