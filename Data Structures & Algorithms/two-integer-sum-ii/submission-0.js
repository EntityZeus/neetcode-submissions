class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let map = {};
        for(let i=0;i<numbers.length;i++) {
            let diff = target - numbers[i];
            if(diff in map) {
                return [map[diff], i+1]
            } else {
                map[numbers[i]] = i+1;
            }
        }
    }
}
