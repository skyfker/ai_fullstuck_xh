// 1 1 2 3 3
var deleteDuplicates = function(head) {
    let cur = head
    while(cur !== null && cur.next !== null){
        if(cur.val === cur.next.val){
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return head
};