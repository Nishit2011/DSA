function solve(board) {
    let rows = board.length
    let cols = board[0].length

    function dfs(row, col) {

        // Outside the board
        if (
            row < 0 ||
            row >= rows ||
            col < 0 ||
            col >= cols
        ) {
            return
        }

        // Not an O
        if (board[row][col] !== 'O') {
            return
        }

        // Mark as safe
        board[row][col] = 'S'

        // Explore four directions
        dfs(row - 1, col)
        dfs(row + 1, col)
        dfs(row, col - 1)
        dfs(row, col + 1)
    }

    // Top row
    for (let col = 0; col < cols; col++) {
        dfs(0, col)
    }

    // Bottom row
    for (let col = 0; col < cols; col++) {
        dfs(rows - 1, col)
    }

    // Left column
    for (let row = 0; row < rows; row++) {
        dfs(row, 0)
    }

    // Right column
    for (let row = 0; row < rows; row++) {
        dfs(row, cols - 1)
    }

    // Capture surrounded regions
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {

            if (board[row][col] === 'O') {
                board[row][col] = 'X'
            }
            else if (board[row][col] === 'S') {
                board[row][col] = 'O'
            }
        }
    }
}