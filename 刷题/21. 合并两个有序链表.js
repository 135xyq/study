/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let p1 = l1;
    let p2 = l2;
    let newList = new ListNode(null);
    let p3 = newList;
    while (p1 && p2) {
        if (p1.val < p2.val) {
            p3.next = p1;
            p3 = p3.next;
            p1 = p1.next
        } else {
            p3.next = p2;
            p2 = p2.next;
            p3 = p3.next
        }
    }
    while (p1) {
        p3.next = p1;
        p3 = p3.next;
        p1 = p1.next
    }
    while (p2) {
        p3.next = p2;
        p2 = p2.next;
        p3 = p3.next
    }
    return newList.next;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))