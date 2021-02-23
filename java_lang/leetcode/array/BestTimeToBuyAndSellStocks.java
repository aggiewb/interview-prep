package java_lang.leetcode.array;

/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/
*/ 

class BestTimeToBuyAndSellStocks {
    public int maxProfit(int[] prices){
        int profit = 0;

        for(int i = 0; i < prices.length - 1; i++){
            int buyPrice = prices[i];
            int sellPrice = prices[i + 1];

            if(sellPrice > buyPrice){
                profit += sellPrice - buyPrice;
            }
        }
        return profit;
    }
}