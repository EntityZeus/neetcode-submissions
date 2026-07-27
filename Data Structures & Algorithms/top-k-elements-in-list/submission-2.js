class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let res = [];
        let map = {};
        for(let i=0; i<nums.length; i++) {
            if(map[nums[i]]) {
                map[nums[i]].val += 1;
            } else {
                map[nums[i]] = {key : nums[i], val: 1};
            }
        }

        const values = Object.values(map);
        values.sort((a, b) => b.val - a.val);
        for(let i=0; i<k; i++) {
            res.push(values[i].key);
        }

        return res;
    }
}
