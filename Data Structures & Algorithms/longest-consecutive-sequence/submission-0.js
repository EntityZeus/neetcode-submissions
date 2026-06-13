class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;
        if(nums.length === 1) return 1;
        let set = new Set(nums);
        let newArr = Array.from(set);
        newArr.sort((a, b) => a - b);

        let res = 1;
        let tempCount = 1;
        let i=0;
        while (i<newArr.length-1) {
            if(Math.abs(newArr[i+1] - newArr[i]) === 1) {
                tempCount += 1;
            } else {
                res = Math.max(tempCount, res);
                tempCount = 1;
            }
            i+=1;
        }
        return Math.max(res, tempCount);
    }
}
