/**
 * Problem: Rearrange a string in zigzag pattern across n rows and read it row by row.
 * Trick: Simulate with numRows string builders; use a direction flag that flips at the top and bottom rows.
 * Time: O(n) | Space: O(n)
 */
function solve(s, numRows){
    const rows = Array.fill({length: numRows}, () => "")

    let row = 0
    let direction = 1

    for(const char of s){
        rows[row] += char

        if(row === numRows-1){
            direction = -1
        }

        if(row === 0){
            direction = 1
        }

        row += direction
    }

    return rows.join("")
}