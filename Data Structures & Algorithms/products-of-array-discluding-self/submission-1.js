 class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]} 
     **/
     
    productExceptSelf(nums) {
        let leftPreProduct = [];
        let rightPostProduct = [];
        let product = 1;
        for(let i=0; i<nums.length;i++) {
            product*=nums[i];
            leftPreProduct.push(product);
        }
        product = 1;
        for(let i=nums.length-1;i>=0;i--) {
            product*=nums[i];
            rightPostProduct.push(product);
        }
        rightPostProduct.reverse();
        let res = [];
        for(let i=0;i<nums.length;i++) {
            let left = i-1;
            let right = i+1;
            if(left >= 0 && right < nums.length) {
                res.push(leftPreProduct[left] * rightPostProduct[right]);
                continue;
            }
            if(left < 0) {
                res.push(rightPostProduct[right]);
                continue;
            }
            if(right >= nums.length) {
                res.push(leftPreProduct[left]);
            }
        }
        return res;
    }
}