/**
 * Problem: Find the minimum number of coins to make a given amount.
 * Trick: Bottom-up DP — dp[i] = min(dp[i], dp[i - coin] + 1) for each coin. Base case dp[0] = 0, rest Infinity.
 * Time: O(amount * coins) | Space: O(amount)
 */
function coinChange(coins, amount) {

    const dp = new Array(amount + 1).fill(Infinity)

    dp[0] = 0

    for (let i = 1; i <= amount; i++) {

        for (const coin of coins) {

            if (i - coin >= 0) {
                dp[i] = Math.min(
                    dp[i],
                    dp[i - coin] + 1
                )
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount]
}

// min coins for amount x
// base case: dp[0] = 0
