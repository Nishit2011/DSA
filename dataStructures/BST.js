class BSTNode{
    constructor(val){
        this.val = val
        this.right = null
        this.left = null
    }

}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(val){
        let newNode = new BSTNode(val)
        if(this.root === null){
            this.root = newNode
            return
        }
        this._insert(this.root, newNode)


    }

    _insert(root, newNode){
        if(newNode.val < root.val){
            if(root.left === null){
                root.left = newNode
                return
            }else{
                this._insert(root.left, newNode )
            }
        }else if(newNode.val> root.val){
            if(root.right=== null){
                root.right = newNode
                return
            }else{
                this._insert(root.right, newNode)
            }
        }
    }

    search(root,val){
       if(!root){
        return false
       }else{
        if(root.val === val){
            return true
        }else{
            if(root.val<val){
              return  this.search(root.right, val)
            }else if(root.val>val){
               return this.search(root.left, val)
            }
        }
       }

    }

    levelOrder(){
        const queue = []
        queue.push(this.root)
        while(queue.length>0){
            let curr = queue.shift()
            console.log(curr.val)
            if(curr.left){
                queue.push(curr.left)
            }
             if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.val)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.val)
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.val)
        }
    }

    min(root){
        if(!root.left){
            return root.val
        }else{
            return this.min(root.left)
        }

    }
    max(root){
        if(!root.right){
            return root.val
        }else{
          return  this.max(root.right)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    deleteNode(root, value){
      if(root === null){
        return null
      }
      if(value<root.val){
        root.left = this.deleteNode(root.left, value)
      }else if(value>root.val){
        root.right = this.deleteNode(root.right, value)
      }else{
        if(!root.left && !root.right){
            return null
        }
      
      if(!root.left){
        return root.right
      }else if(!root.right){
        return root.left
      }
      root.val = this.min(root.right)
      root.right = this.deleteNode(root.right, root.val)
    }  
      return root
    }

    isValidBST(root){
       function validate(node, min, max ){
        if(node === null){
            return true
        }

        if(node.val<= min || node.val>=max){
            return false
        }

        const leftValid = validate(node.left,min, node.val)
        if(!leftValid) return false
         const rightValid = validate(node.right, node.val, max)
         return rightValid

       }
        return validate(root, -Infinity, Infinity);
    }

    lowestCommonAncestor(root, p,q){
        if(p< root.val && q<root.val){
            return this.lowestCommonAncestor(root.left, p,q)
        }
        if(p>root.val && q>root.val){
            return this.lowestCommonAncestor(root.right, p,q)
        }
        return root
    }

  
    

}


module.exports = BinarySearchTree;