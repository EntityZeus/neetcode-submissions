class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set([...nums]);
        let res = 0;
        for(let i=0;i<nums.length;i++) {
            const prev = nums[i] - 1;

            if(!set.has(prev)) {
                let count = 0;
                let j = nums[i];
                while(set.has(j)) {
                    count+=1;
                    j+=1;
                }
                res = Math.max(count, res);
            }
        }
        return res;
    }
}
