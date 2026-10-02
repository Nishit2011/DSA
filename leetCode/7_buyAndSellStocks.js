/**
 * Problem: Find the maximum profit from a single buy-sell stock transaction.
 * Trick: Track running minimum price; compute profit if sold today; update max profit.
 * Time: O(n) | Space: O(1)
 */
function solve(prices) {
    let maxProfit = 0
    let lowestPrice = Infinity

    for (let price of prices) {
        // Cheapest price seen so far
        lowestPrice = Math.min(lowestPrice, price)

        // Profit if we sell today
        let profitIfSoldToday = price - lowestPrice

        // Keep the maximum profit
        maxProfit = Math.max(maxProfit, profitIfSoldToday)
    }

    return maxProfit
}

/**
 * 
 * I maintain the minimum stock price seen so far. 
 * For each price, I treat it as the selling price, calculate the profit using the minimum price seen before it, 
 * and update the maximum profit. This allows me to solve the problem in one pass without checking every buy-sell pair.
 */