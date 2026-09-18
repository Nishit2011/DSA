function isValidSudoku(){
    const rows = Array.from({length:9}, ()=> new Set())
    const cols = Array.from({length:9}, ()=> new Set())
    const boxes = Array.from({length:9}, ()=> new Set())

    for(let row=0;row<9;row++){
        for(let col =0;col<9; col++){
            const value = rows[row][col]

            if(value === "."){
                continue
            }

            const box = Math.floor(row/3)*3 
            + Math.floor(col/3)

            if(rows[row].has(value) || cols[col].has(value) || boxes[box].has(value)){
                return false;

            }

            rows[row].add(value)
            cols[col].add(value)
            boxes[box].add(value)
        }
    }

    return true
}