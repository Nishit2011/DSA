/**
 * Problem: Given weights and values, find the maximum value fitting within a weight capacity (0/1 Knapsack).
 * Trick: 2D DP — dp[i][w] = max value using first i items with capacity w. Either skip item or include it: max(dp[i-1][w], val + dp[i-1][w-weight]).
 * Time: O(n*W) | Space: O(n*W)
 */
function solve(weights, values, capacity){
    const n = weights.length
    const dp = Array.from({length:n+1}, ()=> new Array(capacity+1))

    for(let i=1;i<=n;i++){
        for(let w=1;w<=capacity;w++){
            const weight = weights[i-1]
            const value = values[i-1]

            if(weight<=w){
                dp[i][w] = Math.max(dp[i-1][w], value+ dp[i-1][w-weight])
            }else{
                dp[i][w] = dp[i-1][w]
            }
        }
    }

    return dp[n][capacity]
}

//max value using i items and capacity w