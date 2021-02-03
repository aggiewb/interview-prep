/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
*/ 

const maxProfit = function(prices) {
    let profit = 0;
    for(let i = 0; i < prices.length; i++){
        const buyPrice = prices[i];
        const sellPrice = prices[i + 1];
        if(buyPrice < sellPrice){
            profit += sellPrice - buyPrice;
        }
    }
    return profit;
};