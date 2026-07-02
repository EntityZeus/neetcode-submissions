class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let right = 0;
        let windowArray = [];
        let res = [];
        while(right < k) {
            windowArray.push(nums[right]);
            right+=1;
        }
        res.push(Math.max(...windowArray));
        while(right < nums.length) {
            windowArray.shift();
            windowArray.push(nums[right]);
            res.push(Math.max(...windowArray));
            right+=1;
        }
        return res;
    }
}
