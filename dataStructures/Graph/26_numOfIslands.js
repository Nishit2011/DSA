function numOfIslands(grid){
    let rows = grid.length
    let cols = grid[0].length

    let count =0


    function dfs(row,col){
        if(col<0 || col>=cols ||row<0 ||row>=rows) return

        if(grid[row][col] === '0'){
            return
        }   

        grid[row][col] = '0'

        dfs(row-1,col)
        dfs(row+1, col)
        dfs(row, col+1)
        dfs(row, col-1)

    }


    for(let row=0;row<rows;row++){
        for(let col =0;col<cols;col++){

            if(grid[row][col] === '1'){
                count++

                dfs(row,col)
            }
        }
    }
    return count
}