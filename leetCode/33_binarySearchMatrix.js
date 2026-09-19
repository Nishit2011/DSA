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