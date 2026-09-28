function solve(prices){
    let profit =0

    for(let i=1;i<prices.length;i++){
        if(prices[i]>prices[i-1]){
            profit += prices[i] - prices[i-1]
        }
    }
    return profit
}

/**
 * 
 * Since multiple transactions are allowed, I take advantage of every positive price movement. 
 * If today's price is greater than yesterday's, I add the difference to the total profit. 
 * This effectively captures every profitable upward movement without needing to explicitly track buy and sell transactions.
 */