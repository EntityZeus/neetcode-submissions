class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfits = [prices[prices.length - 1]];
        for(let i=prices.length-2; i>=0;i--) {
            maxProfits.push(Math.max(maxProfits[maxProfits.length - 1], prices[i]));
        }
        maxProfits.reverse();
        let currentMaxProfit = 0;
        for(let i = 0; i < prices.length; i++) {
            if(prices[i] < maxProfits[i]) {
                let profit = maxProfits[i] - prices[i];
                currentMaxProfit = Math.max(currentMaxProfit, profit);
            }
        }
        return currentMaxProfit;
    }
}
