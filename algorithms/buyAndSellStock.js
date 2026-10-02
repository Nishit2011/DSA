/**
 * Problem: Find the maximum profit from one buy-sell transaction.
 * Trick: Track the running minimum price; compute profit if sold today; track max profit.
 * Time: O(n) | Space: O(1)
 */
function stockQues(prices){
    let lowestPrice = Infinity
    let maxProfit = 0

    for(let price of prices){
        lowestPrice = Math.min(lowestPrice, price)

        profitIfSoldToday = price-lowestPrice
        maxProfit = Math.max(profitIfSoldToday, maxProfit)
    }
    return maxProfit
}