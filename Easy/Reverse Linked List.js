var reverseList = function(head) {
    
    let prev = null,curr=null,next=head;
    while(next){
        curr=next
        next=curr.next
        curr.next=prev
        prev=curr
    }
   
    return curr
    
}
