class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0 ) return 0;
        if(nums.length === 1 ) return 1;

        let set = new Set([...nums]);
        let res = 1;
        for(let i=0; i<nums.length; i++) {
            let prevNumber = nums[i] - 1;
            if(set.has(prevNumber)) {
                continue;
            } else {
                let currCount = 0;
                let j = nums[i];
                while(true) {
                    if(set.has(j)) {
                        currCount += 1;
                        j+=1;
                    } else break;
                }
                res = Math.max(currCount, res);
            }
        }
        return res;
    }
}
