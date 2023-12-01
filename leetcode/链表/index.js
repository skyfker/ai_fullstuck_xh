let arr = [1, 2, 3, 4, 5, 6, 7, 8]      // 有序、线性且连续

// {
//     val: 1,  // 数据域
//     next: {  // 指针域
//         val: 2,
//         next: ...
//     }
// }

function ListNode(val ){
    this.val = val
    this.next = null
}
let node = new ListNode(1)
node.next = new ListNode(2)
node.next.next = new ListNode(3)

//增加节点3
node3.next = node1.next
node1.next = node3
let node3 = new ListNode(3)
node.next.next = new ListNode(3)

// 删除中间的节点
const target = node1.next   
node1.next = target.next    // target.next 表示节点2的指针，指向节点3，你把它赋给了节点1的指针，也就是说此时节点1的指针指向了节点3


// 数组中增加或删除一个元素会导致n个元素移动，时间复杂度为O(n)
// 链表的增删一个元素时间复杂度为O(1)