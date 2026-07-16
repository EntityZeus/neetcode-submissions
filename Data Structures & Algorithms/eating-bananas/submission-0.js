class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 0, right = Math.max(...piles);
        function calculateHours(k) {
            let sum = 0;
            for(let i=0; i<piles.length; i++) {
                sum += Math.ceil(piles[i] / k);
            }
            return sum;
        }
        let res = Math.pow(10,9);
        while(left <= right) {
            const mid = Math.floor((right + left) / 2);
            const possibleAns = calculateHours(mid);
            if(possibleAns<=h) {
                res = Math.min(res, mid);
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return res;
    }
}
