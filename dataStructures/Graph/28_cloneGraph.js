function clone(node){
    if(node === null) return false

    const map = new Map()

    function dfs(node){
        if(map.has(node)){
            return map.get(node)
        }

        const clone = new Node(node.val)

        map.set(node, clone)

        for(let neighbor of node.neighbors){
            clone.neighbors.push(dfs(neighbor))
        }
        return clone
    }

    return dfs(node)
}