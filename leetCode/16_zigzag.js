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