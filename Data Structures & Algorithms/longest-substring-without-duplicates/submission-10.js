class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0, right = 0, map = {};
        let res = 0;
        while(right < s.length) {
            if(s[right] in map && map[s[right]] >= left) {
                const diff = right - left;
                res = Math.max(res, diff);
                left = map[s[right]] + 1;
                map[s[right]] = right;
            } else {
                map[s[right]] = right;
            }
            right+=1;
        }
        return Math.max(res, right - left);
    }
}
