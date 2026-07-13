class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0, right = 0;
        let map = {};
        let maxLen = 0;

        while(right < s.length) {
            if(s[right] in map && map[s[right]] >= left) {
                maxLen = Math.max(right - left, maxLen);
                left = map[s[right]] + 1;
                map[s[right]] = right;
            } else {
                map[s[right]] = right;
            }
            right+=1;
        }
        return Math.max(right - left, maxLen);
    }
}
