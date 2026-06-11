class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numsSet = new Set(nums);
        if(numsSet.size === nums.length) return false;
        else return true;
    }
}
