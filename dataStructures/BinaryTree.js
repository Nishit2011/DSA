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

    levelOrder(node){
        if(node===null) return []

        const result = []
        const queue = [node]

        while(queue.length>0){
            const levelSize = queue.length
            const currentLevel = []

            for(let i=0;i<levelSize;i++){
                const currentNode = queue.shift()
                currentLevel.push(currentNode.value)

                if(currentNode.left !== null){
                    queue.push(currentNode.left)
                }
                if(currentNode.right !==null){
                    queue.push(currentNode.right)
                }
            }
            result.push(currentLevel)
        }

        return result

    }

    rightSideView(node){
        if(node === null) return []

        const result =[]
        const queue = [node]

        while(queue.length>0){
            const levelSize = queue.length
            for(let i=0;i<levelSize;i++){
                const currentNode = queue.shift()

                if(i=== levelSize-1){
                    result.push(currentNode.value)
                }
                if(currentNode.left !== null){
                    queue.push(currentNode.left)
                }
                 if(currentNode.right !== null){
                    queue.push(currentNode.right)
                }
            }
        }
        return result
    }

    lowestCommonAncestor(node,p,q){
        if(node===null) return null
        if(node===p || node===q){
            return node
        }

       const left = this.lowestCommonAncestor(node.left,p,q)
       const right = this.lowestCommonAncestor(node.right, p, q)

       if(left !== null && right !== null){
        return node
       }
       return left !==null ? left: right
    }
    pathSum(node, targetSum){
        if(node ===null) return false

        if(node.left === null && node.right === null){
            return node.value === target
        }

        const remainingSum = targetSum - node.value
        return(
            this.pathSum(node.left, remainingSum) ||
            this.pathSum(node.right, remainingSum)
        )


    }
    isSymmetric(node){
        if(node === null) return true
        this.isMirror(node.left, node.right)
    }

    isMirror(left, right){
        if(left === null && right === null) return true
        if(left === null || right === null) return false

        if(left.value !== right.value){
            return false
        }

        return (
            this.isMirror(left.left, right.right) &&
            this.isMirror(left.right, right.left)
        )
    }
}