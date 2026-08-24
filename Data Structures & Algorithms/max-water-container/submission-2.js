class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0, right = heights.length - 1;
        let max = 0;
        while(left < right) {
            const waterContent = Math.min(heights[left], heights[right]) * (right - left);
            max = Math.max(max, waterContent);
            if(heights[left] < heights[right]) {
                left += 1;
            } else {
                right -= 1;
            }
        }
        return max;
    }
}
