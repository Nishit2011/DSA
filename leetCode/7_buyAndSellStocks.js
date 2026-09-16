function solve(prices){
    let maxProfit =0
    let lowestPrice = Infinity

    for(let price of prices){
        lowestPrice = Math.min(lowestPrice, price)
        let profitIfSoldToday = price - lowestPrice

        maxProfit = Math.max(maxProfit, profitIfSoldToday)
    }
    return 

}