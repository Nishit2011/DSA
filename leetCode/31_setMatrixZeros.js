function solve(matrix){
    const rows = matrix.length
    const cols = matrix.length

    let firstRowZero = false
    let firstColZero = true

    for(let j=0;j<cols;j++){
        if(matrix[0][j] === 0){
            firstRowZero = true
        }
    }

    for(let i=0;i<rows;i++){
        if(matrix[i][0] === 0){
            firstColZero = true
        }
    }

    for(let i=1;i<rows;i++){
        for(let j=1;j<cols;j++){
            if(matrix[i][j] === 0){
                matrix[i][0] = 0
                matrix[0][j] = 0
            }   
        }
    }

    for(let i=1;i<rows;i++){
        for(j=1;j<cols;j++){
            if(matrix[i][0] ===0 || matrix[0][j] === 0){
                matrix[i][j] = 0
            }
        }
    }

    if(firstRowZero){
        for(j=0;j<cols;j++){
            matrix[0][j] = 0
        }
    }

    if(firstColZero){
        for(i=0;i<rows;i++){
            matrix[i][0] = 0
        }
    }
}