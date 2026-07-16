class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let left = [];
        let right = [];
        for(let i=0; i<heights.length; i++) {
            left.push(-1);
            right.push(-1);
        }
        let stack = [];
        for(let i = heights.length - 1; i>=0 ; i--) {
            while(stack.length >0 && heights[stack[stack.length - 1]] >= heights[i]){
                stack.pop();
            }
            right[i] = stack.length === 0 ? heights.length : stack[stack.length - 1];
            stack.push(i);
        }
        stack = [];
        for(let i = 0; i<heights.length; i++) {
            while(stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
                stack.pop();
            }
            left[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
            stack.push(i);
        }

        let res = 0;
        for(let i = 0; i<heights.length ;i++) {
            const width = right[i] - left[i] - 1;
            const area = heights[i] * width;
            res = Math.max(res, area);
        }
        return res;
    }
}
