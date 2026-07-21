class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0, right = nums.length - 1;
        while(right >= left) {
            const mid = Math.floor((left + right) / 2);
            if(nums[mid] === target) return mid;
            //identify the sorted part 
            if(nums[mid] <= nums[right]) {
                // right side is sorted
                if(target <= nums[right] && target >= nums[mid]) {
                    //target is there in this range
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            } else {
                // left part is sorted
                if(target <= nums[mid] && target >= nums[left]) {
                    //target is there in this range
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        }
        return -1;
    }
}
