class Stack{
    constructor(){
        this.items =[]
        this.minStack = []

    }
    isEmpty(){
        return this.items.length === 0
    }
    size(){
        return this.items.length
    }

    push(element){
         this.items.push(element)

         if((this.minStack.length ===0)|| element <= this.minStack[this.minStack.length-1]){
            this.minStack.push(element)
         }
    }
    pop(){
        let poppedElement = this.items.pop()

        if(poppedElement === this.minStack[this.minStack.length-1]){
            this.minStack.pop()
        }
    }
    peek(){
        if(this.isEmpty()) return "No elements in stack"
        return this.items[this.items.length-1]
    }

    getMin(){
        if(this.isEmpty()) return undefined
        return this.minStack[this.minStack.length-1]
    }

}