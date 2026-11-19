class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head= null
        this.size =0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }
    prepend(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next= this.head
            this.head= node
        }
        this.size++
    }

    append(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    print(){
        let listValue =''
        if(this.isEmpty()) return 'List is Empty'
        let curr = this.head
        while(curr){
            listValue += `${curr.value} ->`
            curr = curr.next
        }
        console.log(listValue)
        return

    }
    insert(value, index){
        if(index<0 || index > this.size){
            return 'Out of bound'
        }
        if(index===0){
           this.prepend(value)
        }else{
            let node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
            
        }
    }
    removeFrom(index){
        if(index<0 || index >= this.size ) return 'Out of Bound'
        let removedNode;
        if(index === 0){
            removedNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++ ){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }

    removeByValue(value){
           if(this.isEmpty()) return false

    if(this.head.value === value){
        this.head = this.head.next
        this.size--
        return true
    }

    let prev = this.head

    while(prev.next && prev.next.value !== value){
        prev = prev.next
    }

    if(prev.next){
        prev.next = prev.next.next
        this.size--
        return true
    }

    return false
    }

    //reversing a linkedlist
reverse(){
    let prev = null
    let curr = this.head

    while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    this.head = prev
}

    mergeList(l2){
        let l1Curr = this.head
        let l2Curr = l2.head

        let mergedList = new LinkedList()

        while(l1Curr && l2Curr){
            if(l1Curr.value<= l2Curr.value){
                mergedList.append(l1Curr.value)
                l1Curr = l1Curr.next
            }else{
                 mergedList.append(l2Curr.value)
                 l2Curr = l2Curr.next
            }
        }

        while(l1Curr){
            mergedList.append(l1Curr.value)
            l1Curr = l1Curr.next
        }
         while (l2Curr) {
        mergedList.append(ll2Curr.value);
        l2Curr = l2Curr.next;
    }

    return mergedList;
    }

    hasCycle(){
        let slow = this.head
        let fast = this.head
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next

            if(slow === fast){
                return true
            }
        }
        return false;

    }

    removeNthNodeFromEnd(n){
    let dummy = new Node(0)
    dummy.next = this.head

    let slow = dummy
    let fast = dummy

    // Create gap of n
    for(let i = 0; i < n; i++){
        fast = fast.next
    }

    // Move until fast reaches last node
    while(fast.next){
        slow = slow.next
        fast = fast.next
    }

    // Remove target
    slow.next = slow.next.next

    this.head = dummy.next
    this.size--

    return this
}

    sortList(head) {

    // Base case
    if (!head || !head.next) {
        return head
    }

    // Find middle
    let slow = head
    let fast = head
    let prev = null

    while (fast && fast.next) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }

    // Split the list into two halves
    prev.next = null

    // Sort left half
    let left = sortList(head)

    // Sort right half
    let right = sortList(slow)

    // Merge both sorted halves
    return merge(left, right)
}


merge(l1, l2) {

    // Temporary node
    let dummy = new Node(0)

    // Tail of merged list
    let tail = dummy

    while (l1 && l2) {

        if (l1.value <= l2.value) {
            tail.next = l1
            l1 = l1.next
        } else {
            tail.next = l2
            l2 = l2.next
        }

        tail = tail.next
    }

    // Attach remaining nodes
    if (l1) {
        tail.next = l1
    }

    if (l2) {
        tail.next = l2
    }

    return dummy.next
}

  rotate(k){
    if(!this.head || !this.head.next){
        return
    }

    let tail = this.head;
    let length = 1

    while(tail.next){

        tail = tail.next
        length++
    }
    k= k%length
    if(k===0) return

    //connects tail to head to form a circle
    tail.next = this.head

    let steps = length - k - 1
    let newTail = this.head

    while(steps > 0){
        newTail = newTail.next
        steps--
    }
      // Break the circle
    this.head= newTail.next
    newTail.next = null

  }

partition(x){
    let lessDummy = new Node(0)
    let greaterDummy = new Node(0)

    let less = lessDummy
    let greater = greaterDummy

    let current = this.head

    while(current){
        if(current.value<x){
            less.next = current
            less = less.next
        }else{
            greater.next = current
            greater = greater.next
        }
        current = current.next
    }

    greater.next = null
    less.next = greater.next

    return lessDummy.next

    }

   


}

module.exports = LinkedList