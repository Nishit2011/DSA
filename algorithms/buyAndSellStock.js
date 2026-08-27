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