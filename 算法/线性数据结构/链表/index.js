function Node(value) {
    this.value = value;
    this.next = null;
}

let list = new Node(0);

let temp = list;
for (let i = 0; i < 8; i++) {
    temp.next = new Node(i + 1);
    temp = temp.next;
}


let t = list;

// 链表的普通遍历
function traversal(root) {
    while (true) {
        if (root) {
            console.log(root.value);
        } else {
            break;
        }
        root = root.next
    }
}

// traversal(list);

// 递归遍历链表

function traversalRecursion(root) {
    if (root === null) {
        return;
    }
    console.log(root.value);
    traversalRecursion(root.next)
}

// traversalRecursion(list);

// 链表的逆置

function reverseLink(root) {
    if (!root.next.next) {
        root.next.next = root;
        return root.next;
    } else {
        const result = reverseLink(root.next);
        root.next.next = root;
        root.next = null;
        return result;
    }
}


let v = reverseLink(list);

traversal(v);