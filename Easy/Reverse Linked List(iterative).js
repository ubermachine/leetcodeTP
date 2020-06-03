var reverseList = function(head) {
    
    let prev = null
    if(head==null||head.next==null){
        return head
        
    }
    
   let p= reverseList(head.next)
   console.log(p)
    head.next.next=head
    head.next=null
    return p
    
}
