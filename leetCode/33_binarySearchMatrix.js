/**
 * Problem: Search a target in an m×n matrix where rows and columns are sorted (treated as one sorted sequence).
 * Trick: Treat the 2D matrix as a 1D sorted array — map mid to row (mid/cols) and column (mid%cols).
 * Time: O(log(m*n)) | Space: O(1)
 */
function solve(matrix, target){
    let rows = matrix.length
    let cols = matrix[0].length
    let left = 0
    let right = rows*cols -1

    while(left<=right){
        let mid=Math.floor((left+right)/2)

        let row = Math.floor(mid/cols)
        let col = mid%cols

        let value = matrix[row][col]

        if(target>value){
            left = mid+1
        }else if(target<value){
            right = mid-1
        }
    }

    return false
}