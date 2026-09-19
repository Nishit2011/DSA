function rotateImg(matrix){

    const result = transpose(matrix)

    for(let i=0;i<result.length;i++){
        result[i].reverse()
    }

}


function transpose(matrix){
    for(let i=0;i<matrix.length;i++){
        for(let j=i+1;j<matrix.length;j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i],matrix[i][j]]
        }
    }
    return matrix
}