class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set([...nums]);
        let res = 0;
        for(let i=0; i<nums.length; i++) {
            const prev = nums[i] - 1;
            if(set.has(prev)) {
                continue;
            } else {
                let count=0, j=nums[i];
                while(true) {
                    if(set.has(j)) {
                        count +=1;
                        j+=1;
                    }
                    else break;
                }
                res = Math.max(res, count);
            }
        }
        return res;
    }
}
