// var reverseList = function(head) {
//     let [prev, current] = [null, head]
//     while(current) {
//         [current.next, prev, current] = [prev, current, current.next]
//     }
//     return prev
// }
var reverseList = function(head) {
    let [prev, current,next] = [null, null,head]
    while(next) {
        current=next
        next=current.next
        current.next=prev
        prev=current
    }
    return current
}
