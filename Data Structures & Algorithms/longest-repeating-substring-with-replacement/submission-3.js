class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let maxFreq = 0, res = 0;
        let map = {};
        for(let right = 0; right < s.length; right++) {
            map[s[right]] = (map[s[right]] + 1) || 1;
            maxFreq = Math.max(maxFreq, map[s[right]]);
            // left pointer
            while((right - left + 1) - maxFreq > k) {
                map[s[left]] -= 1;
                left +=1
            }
            res = Math.max(res, right - left + 1);
        }
        return res;
    }
}
