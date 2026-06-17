class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let resSet = new Set();
        
        for(let i=0;i<nums.length;i++) {
            let targetSum = 0 - nums[i];

            let numberMap = {};
            for(let j=0;j<nums.length;j++) {
                if(i===j) continue;
                let diff = targetSum - nums[j];
                if(diff in numberMap) {
                    // get the nums as non decresing order
                    let itemToAdd = [nums[i], diff, nums[j]].sort((a,b) => a-b).join(',');
                    resSet.add(itemToAdd);
                } else {
                    numberMap[nums[j]] = true;
                }
            }
        }

        let res = [];
        //parse result set.
        resSet.forEach(item => {
            let arr = item.split(',').map(data => parseInt(data));
            res.push(arr);
        })
        return res;
    }
}
