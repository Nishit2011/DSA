class Node{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }

    invert(node){
        if(node===null){
            return null
        }

        [node.left, node.right] = [node.right, node.left]

        this.invert(node.left)
        this.invert(node.right)

        return node
    }

    maxDepth(node){
        if(node === null) return null

        const leftDepth = this.maxDepth(node.left)
        const rightDepth = this.maxDepth(node.right)

        return 1+this.maxDepth(leftDepth, rightDepth)
    }

    isSameTree(p, q){
        if(p===null && q===null) return true

        if(p===null || q=== null) return false
        if(p.value !== q.value) return false

        return (
            this.isSameTree(p.left , q.left) &&
            this.isSameTree(p.right, q.right)
        )
    }

    checkHeight(node){
        if(node===null) return 0

        const leftHeight = this.checkHeight(node.left)

        if(leftHeight === -1) return -1

        const rightHeight = this.checkHeight(node.right)
        if(rightHeight === -1) return -1

        if(Math.abs(leftHeight- rightHeight)>1){
            return -1
        }

        return 1+Math.max(leftHeight, rightHeight)
    }
   
    isBalanced(node){
        return this.checkHeight(node) !== -1
    }
}