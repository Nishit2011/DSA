function dfs(graph, start){
    const visited = new Set()

    function explore(node){
        if(visited.has(node)){
            return
        }
        visited.add(node)
        console.log(node)

        for(let neighbor of graph[node]){
            explore(neighbor)
        }
    }

    explore(start)
}


/**
 * 
 *      A
       / \
      B   C
     / \
    D   E

   graph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: [],
    D: [],
    E: []
}
 */
