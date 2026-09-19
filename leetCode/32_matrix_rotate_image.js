function rotateImg(matrix){
    let transposeResult = transpose(matrix)

      for (let i = 0; i < n; i++) {
       transposeResult[i].reverse();
    }

    transposeResult.reverse()
}


function transpose(matrix){
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<i+1;j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i],matrix[i][j]]
        }
    }
    return matrix
}