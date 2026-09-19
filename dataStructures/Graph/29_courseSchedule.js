function courseSchedule(numCourses, prerequisites){

    const graph = new Array(numCourses)
                        .fill(null)
                        .map(()=>[])

    
    for(let [course, prerequisite] of prerequisites){
        graph[prerequisite].push(course)
    }

    const visited = new Set()
    const path = new Set()


    function dfs(course){
        if(path.has(course)){
            return false
        }

        if(visited.has(course)){
            return true
        }

        visited.add(course)
        path.add(course)

        for(let nextCourse of graph[course]){

            if(!dfs(nextCourse)){
                return false
            }

           
        }
         path.delete(course)
    }

    for(let course = 0;course<numCourses;course++){
        if(!dfs(course)){
            return false
        }
    }

    return true
}