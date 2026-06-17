class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left, right;
        left = 0, right = heights.length - 1;
        let res = 0;
        while(left < right) {
            let sum = Math.min(heights[left], heights[right]) * (right - left);
            res = Math.max(res, sum);
            if(heights[left] > heights[right]) {
                right-=1;
            } else {
                left+=1;
            }
        }
        return res;
    }
}
