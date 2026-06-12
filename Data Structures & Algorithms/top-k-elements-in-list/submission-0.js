class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};
        for(let i=0;i<nums.length;i++) {
            if(nums[i] in map) map[nums[i]]+=1;
            else map[nums[i]] = 1;
        }
        let arrayObj = [];
        Object.keys(map).forEach((key)=>{
            arrayObj.push({key: key, value: map[key]});
        });
        arrayObj.sort((a,b) => b.value - a.value);
        let res =[];
        for(let i=0;i<k;i++) {
            res.push(arrayObj[i].key)
        }
        return res;
    }
}
