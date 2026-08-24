class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let right = [];
        let max = 0;
        
        for(let i=prices.length - 1; i>=0; i--) {
            max = Math.max(max, prices[i]);
            right.push(max);
        }
        right.reverse();
        let maxProfit = 0;
        for(let i=0; i<prices.length; i++) {
            if(right[i] > prices[i]) {
                maxProfit = Math.max(maxProfit, (right[i] - prices[i]));
            }
        }
        return maxProfit;
    }
}
