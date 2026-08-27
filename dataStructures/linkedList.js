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
        if(index<0 || index > this.size ) return 'Out of Bound'
        let removedNode;
        if(index === 0){
            removedNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0;i<index-1; ){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }

    removeFrom(value){
       
    }

    //reversing a linkedlist
    reverse(){
        let prev =null
        let curr = this.head
        while(curr){
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
         while (list2Current) {
        mergedList.append(list2Current.value);
        list2Current = list2Current.next;
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

}

module.exports = LinkedList