class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0, right = nums.length - 1;
        while(right >= left) {
            const mid = Math.floor((right + left) / 2);
            if(nums[mid] === target) return mid;
            // check which side is sorted    
            if(nums[mid] <= nums[right]) {
                // right side is sorted
                if(target >= nums[mid] && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            } else {
                // left side is sorted
                if(target >= nums[left] && target <= nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        }
        return -1;
    }
}
