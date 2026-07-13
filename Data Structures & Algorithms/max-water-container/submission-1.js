class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0, right = heights.length - 1;
        let res = 0;
        while(left < right) {
            const possibleRes = Math.min(heights[left], heights[right]) * (right - left);
            res = Math.max(res, possibleRes);
            if(heights[left] < heights[right]) {
                left+=1;
            } else {
                right-=1;
            }
        }
        return res;
    }
}
