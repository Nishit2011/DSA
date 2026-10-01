class Node{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
        this.next = null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }

    insert(value){
        const newNode = new Node(value)

        if(this.root === null){
            this.root = newNode
            return 
        }

        const queue = [this.root]

        while(queue.length>0){
            const current = queue.shift()

            if(current.left === null){
                current.left = newNode
                return
            }
            queue.push(current.left)

            if(current.right === null){
                current.right = newNode
                return
            }
            queue.push(current.right)
        }

       
    }

    print(){
        if(this.root === null){
            console.log("Tree is empty")
        }
        const queue = [this.root]

        while(queue.length>0){
            const current = queue.shift()

            console.log(current.value)

            if(current.left !== null){
                queue.push(current.left)
            }
            if(current.right !== null){
                queue.push(current.right)
            }
        }
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


    //build tree from preorder(node->left->right) and inorder(left->node->right)

    buildTree(preOrder, inOrder){
        if(preOrder.length === 0 || inOrder.length === 0){
            return null
        }

        const rootValue = preOrder[0]
        const root = new Node(rootValue)

        const rootIndex = inOrder.indexOf(rootValue)

        const leftInOrder = inOrder.slice(0, rootIndex)
        const rightInOrder = inOrder.slice(rootIndex+1)

        root.left = this.buildTree(preOrder.slice(1, rootIndex+1), leftInOrder)
        root.right = this.buildTree(preOrder.slice(rootIndex+1), rightInOrder)

        return root

    }

    buildTreeFromPostorder(inOrder, postOrder){
        if(inOrder.length === 0 || postOrder.length === 0){
            return null
        }

        const rootValue = postOrder[postOrder.length - 1]
        const root = new Node(rootValue)

        const rootIndex = inOrder.indexOf(rootValue)

        root.left = this.buildTreeFromPostorder(inOrder.slice(0, rootIndex), postOrder.slice(0, rootIndex))
        root.right = this.buildTreeFromPostorder(inOrder.slice(rootIndex+1), postOrder.slice(rootIndex, -1 ))

        return root
    }

    connectNextPointers(root){

        if(root === null){
            return null
        }

        let currentLevel = root

        while(currentLevel !== null){

            const dummy = new Node(0)
            const tail = dummy

            let current = currentLevel

            while(current.left !== null){
                tail.next = current.left
                tail = tail.next
            }

            if(current.right !== null){
                tail.next = current.right
                tail = tail.next
            }

            currentLevel = dummy.next
        }

        return root

    }

    countNodes(node){
        if(node === null){
            return 0
        }

        let leftHeight =0
        let current = node

        while(current !== null){
            leftHeight++
            current = current.left
        }

        let rightHeight = 0
    
         current = node
        while(current !== null){
            rightHeight++
            current = current.right
        }

        if(leftHeight === rightHeight){
            return Math.pow(2, leftHeight -1)
        }

        return (
            1+ this.countNodes(node.left) + this.countNodes(node.right)
        )

    //     1                   
    //    / \
    //   2   3
    //  / \  /
    // 4  5 6
    }




}