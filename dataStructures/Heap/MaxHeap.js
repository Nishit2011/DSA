class MaxHeap{
 constructor(){
    this.heap = []
 }

 getParentIndex(i){
    return Math.floor((i-1)/2)
 }
 getLeftChildIndex(i){
    return 2*i + 1
 }
 getRightChildIndex(i){
    return 2*i +2
 }
 size(){
    return this.heap.length
 }
 isEmpty(){
    return this.size() === 0
 }
 peek(){
    if(this.isEmpty()) return null
    return this.heap[0]
 }

 swap(i,j){
    [this.heap[i], this.heap[j]] =
     [this.heap[j], this.heap[i]]
 }
 insert(val){
    this.heap.push(val)
    this.heapifyUp(this.heap.length-1)

 }

 heapifyUp(index){
    while(index>0){
        const parentIndex = this.getParentIndex(index)

        if(this.heap[index]>this.heap[parentIndex]){
            this.swap(index, parentIndex)
            index = parentIndex
        }else{
            break
        }
    }
 }

 remove(){
    if(this.isEmpty()) return null
    if(this.heap.length === 1){
        return this.heap.pop()
    }
    const max = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.heapifyDown(0)
    return max
 }
 heapifyDown(index) {
        while (true) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);

            let largestIndex = index;

            // Is left child larger?
            if (
                leftChildIndex < this.heap.length &&
                this.heap[leftChildIndex] > this.heap[largestIndex]
            ) {
                largestIndex = leftChildIndex;
            }

            // Is right child larger?
            if (
                rightChildIndex < this.heap.length &&
                this.heap[rightChildIndex] > this.heap[largestIndex]
            ) {
                largestIndex = rightChildIndex;
            }

            // Current node is already the largest
            if (largestIndex === index) {
                break;
            }

            this.swap(index, largestIndex);

            index = largestIndex;
        }
    }
}