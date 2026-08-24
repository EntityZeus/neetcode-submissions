class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = [];
        let right = [];
        let max = 0;
        for(let i=0; i<height.length; i++) {
            max = Math.max(max, height[i]);
            left.push(max);
        }
        max = 0;
        for(let i=height.length-1; i>=0; i--) {
            max = Math.max(height[i], max);
            right.push(max);
        }
        right.reverse();
        let sum = 0;
        for(let i=0; i<height.length; i++) {
            const waterContent = Math.min(left[i], right[i]) - height[i];
            sum = sum + Math.max(waterContent, 0);
        }
        return sum;
    }
}
