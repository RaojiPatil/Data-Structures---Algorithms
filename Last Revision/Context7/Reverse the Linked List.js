
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
    if(head == null || head.next == null)
    return head;
    
    var out = reverse(head.next);
    head.next.next = head;
    head.next = null;
    return out;
    
    
}


function isPowerOfTwo(n){
    var x = Math.pow(2, Math.round(Math.log(n) / Math.log(2)));
    return x;
  }

  console.log(isPowerOfTwo(3));