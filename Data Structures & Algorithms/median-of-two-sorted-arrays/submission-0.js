class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const newArr = [...nums1, ...nums2];
        newArr.sort((a,b) => a-b);
        if(newArr.length % 2 === 0) {
            const mid = newArr.length / 2;
            return (newArr[mid] + newArr[mid - 1]) / 2;
        } else {
            const mid = Math.floor(newArr.length / 2);
            return newArr[mid];
        }
    }
}
