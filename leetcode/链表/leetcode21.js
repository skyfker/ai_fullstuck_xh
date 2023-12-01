/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const head = new ListNode()     // {val: 0, next: null}
    let cur = head    // 创建一个空链表，头节点是空
    // list1.next !== null && list2.next !== null 这样写会漏掉短的那个的最后一个
    while(list1 && list2){
        if(list1.val < list2.val){
            cur.next = list1
            list1 = list1.next
        }else{
            cur.next = list2
            list2 = list2.next
        }
        cur = cur.next
    }
    // 不可能两个同时为空，就算是两个链表长度一样，也有一个先后顺序
    cur.next = list1 !== null ? list1 : list2
    // if(list1){
    //     cur.next = list1
    // } else (
    //     cur.next = list2
    // )
    
    return head.next

};