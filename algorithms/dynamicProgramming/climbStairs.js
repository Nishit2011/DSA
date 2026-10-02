/**
 * Problem: Count the number of ways to climb n stairs taking 1 or 2 steps at a time.
 * Trick: Fibonacci pattern — dp[i] = dp[i-1] + dp[i-2]. Base cases: dp[1]=1, dp[2]=2.
 * Time: O(n) | Space: O(n)
 */
function climbStairs(n){

    if(n===1) return 1
    if(n===2) return 2

    const dp = new Array(n+1)

    dp[1] = 1
    dp[2] = 2

    for(let i=3; i<=n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n]
}