function bfs(graph, start){

    let queue = [start]
    let visited = new Set()

    visited.add(start)

    while(queue.length>0){
        const current = queue.shift()

        console.log(current)

        for(let neighbor of graph[current]){
            if(!visited.has(neighbour)){
                queue.push(neighbor)
                visited.add(neighbor)
            }
        }
    }

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


A-B-C-D-E
 */
