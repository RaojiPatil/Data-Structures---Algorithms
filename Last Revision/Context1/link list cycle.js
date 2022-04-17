
var hasCycle = function(head) {
    let val = head;
    while (val && val.next) {
      head = head.next;
      val = val.next.next;
      if (val === head) 
      return true;
    }
    return false;
};