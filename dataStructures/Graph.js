class Graph{
    constructor(){
        this.adjacencyList = new Map()
    }

    addVertex(vertex){

        if(!this.adjacencyList.has(vertex)){
            this.adjacencyList.set(vertex, [])
        }
    }

    addEdge(vertex1, vertex2){
        this.adjacencyList.get(vertex1).push(vertex2)
        this.adjacencyList.get(vertex2).push(vertex1)
    }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList.set(
        vertex1,
        this.adjacencyList.get(vertex1)
            .filter(vertex => vertex !== vertex2)
    );

    this.adjacencyList.set(
        vertex2,
        this.adjacencyList.get(vertex2)
            .filter(vertex => vertex !== vertex1)
    );
}
removeVertex(vertex){
    const neighbors = this.adjacencyList.get(vertex)

    for(let neighbor of neighbors){
        this.removeEdge(vertex, neighbor)
    }
    this.adjacencyList.delete(vertex)
}
}