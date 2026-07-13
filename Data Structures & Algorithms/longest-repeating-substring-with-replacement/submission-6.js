class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0, right = 0, map = {}, maxFreq = 0;
        let res = 0;
        while(right < s.length) {
            map[s[right]] = (map[s[right]] || 0) + 1;
            maxFreq = Math.max(maxFreq, map[s[right]]);

            while((right - left + 1) - maxFreq > k) {
                map[s[left]] -=1;
                left +=1;
            }
            res = Math.max(res, right - left + 1);
            right+=1;
        }
        return res
    }
}
