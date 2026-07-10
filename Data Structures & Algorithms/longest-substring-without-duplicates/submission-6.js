class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        if(s.length === 0) return 0;
        if(s.length === 1) return 1;

        let left = 0, right = 0;
        let map = {};
        let res = 0;
        while(right < s.length) {
            if(s[right] in map && map[s[right]] >= left) {
                const possibleRes = right - left;
                res = Math.max(res, possibleRes);
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
