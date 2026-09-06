class MinHeap{
    constructor(){
        this.heap = []
    }

    getParentIndex(i){
        return Math.floor((i-1)/2)
    }

    getLeftChildIndex(i){
        return 2*i +1
    }

    getRightChildIndex(i){
        return 2*i +2
    }

    size(){
        return this.heap.length 
    }
    isEmpty(){
        return this.heap.length  === 0
    }
    peek(){
        if(this.isEmpty()) return null

        return this.heap[0]
    }

    swap(i,j){
        [this.heap[i],this.heap[j]] =  [this.heap[j],this.heap[i]]
    }

    insert(val){
        this.heap,push(val)
        this.heapifyUp(this.heap.length - 1)
    }

    heapifyUp(index){
        while(index>0){
            const parentIndex = this.getParentIndex(index)
            if(this.heap[index] < this.heap[parentIndex]){

                this.swap(index, parentIndex)
                index = parentIndex
            }else{
                break;
            }

        }
    }

    remove(){
        if(this.isEmpty()) return null
        if(this.heap.length === 1) return this.pop()

        const min = this.heap[0]
        this.heap[0] = this.heap.pop()

        this.heapifyDown(0)
        return min
    }
    heapifyDown(index) {

    while (true) {

        // 1. Find children
        const left = this.getLeftChildIndex(index);
        const right = this.getRightChildIndex(index);

        // 2. Assume current is smallest
        let smallest = index;

        // 3. Compare left
        if (left < this.heap.length &&
            this.heap[left] < this.heap[smallest]) {

            smallest = left;
        }

        // 4. Compare right
        if (right < this.heap.length &&
            this.heap[right] < this.heap[smallest]) {

            smallest = right;
        }

        // 5. Already correct?
        if (smallest === index) {
            break;
        }

        // 6. Swap
        this.swap(index, smallest);

        // 7. Continue downward
        index = smallest;
    }
}

 kthLargestNum(nums, k){
    const heap = new MinHeap()
    for (const num of nums){
        if(heap.size()<k){
            heap.insert(num)
        }else if(num>heap.peek()){
            heap.remove()
            heap.insert(num)
        }
    }
    return heap.peek()
}

KClosest(points,k){
    const heap = new Heap((a,b)=>{
        return a.distance > b.distance
    })

    for(const point of points){
        const [x,y] = point

        const distance = x * x + y*y

        const item = {
            point, distance
        }
        if(heap.size()<k){
            heap.insert()
        }else if(distance<heap.peek()){
            heap.remove()
            heap.insert(item)
        }
    }
     return heap.heap.map(item => item.point);
    }
}

