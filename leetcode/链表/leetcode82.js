// 0  1  2  2  2  3

var deleteDuplicates = function(head) {
    let front = new ListNode() // 防止head删掉后找不到头结点
    front.next = head
  
    let cur = front
  
    while (cur != null && cur.next != null && cur.next.next != null) {
      if (cur.next.val === cur.next.next.val) {
        let value = cur.next.val
  
        while (cur.next != null && cur.next.val === value) {
          cur.next = cur.next.next
        }
  
      } else {
        cur = cur.next
      }
    }
    return front.next
  };