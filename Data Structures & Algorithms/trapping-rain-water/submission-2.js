class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let sum = 0;
        let leftMax = [height[0]];
        let rightMax = [height[height.length - 1]];

        for(let i = 1; i<height.length; i++) {
            leftMax.push(Math.max(leftMax[leftMax.length - 1], height[i]));
        }

        for(let i = height.length - 2; i>=0; i--) {
            rightMax.push(Math.max(rightMax[rightMax.length - 1], height[i]));
        }

        rightMax.reverse();

        for(let i = 1; i < height.length - 1; i++) {
            const waterContain = Math.min(leftMax[i-1], rightMax[i+1]) - height[i];
            sum +=Math.max(waterContain, 0);
        }
        return sum;
    }
}
