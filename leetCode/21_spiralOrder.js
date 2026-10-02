/**
 * Problem: Return all elements of a matrix in spiral order.
 * Trick: Four boundary pointers (top, bottom, left, right) — traverse top row, right col, bottom row, left col, then shrink boundaries inward.
 * Time: O(m*n) | Space: O(m*n)
 */
function spiralOrder(matrix){
    const result = []

    let top = 0
    let bottom = matrix.length - 1
    let left =0
    let right = matrix[0].length - 1

    while(top<=bottom && left <= right){

      for(let col=left; col<=right;col++){
        result.push(matrix[top][col])

      }
      top++

      for(let row=top;row<=bottom;row++)     {
        result.push(matrix[row][right])
      }
      right--

      if(top<=bottom){
        for(let col=right;col>=left;col--){
            result.push(matrix[bottom][col])
        }
      }
      if(left<=right){
        for(let row=bottom; row>=top;row++){
            result.push(matrix[row][left])
        }
        left++
      }
}

return result
}