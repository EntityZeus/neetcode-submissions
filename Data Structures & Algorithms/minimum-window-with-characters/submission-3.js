class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(s.length < t.length) return "";
        let left = 0, right = 0, count = 0;
        let map = {}, minLen = Math.pow(10, 9), startIndex = -1;

        for(let i = 0; i<t.length; i++) {
            map[t[i]] = (map[t[i]] || 0) + 1;
        }

        while(right < s.length) {
            if(map[s[right]] > 0) {
                count += 1;
            }
            map[s[right]] = (map[s[right]] || 0) - 1;
            while(count === t.length) {
                if(right - left + 1 < minLen) {
                    startIndex = left;
                    minLen = right - left + 1;
                }
                map[s[left]] += 1;
                if(map[s[left]] > 0) {
                    count -=1;
                }
                left +=1;
            }
            right+=1;
        }
        if(startIndex >= 0 && minLen <= s.length) {
            return s.substring(startIndex, startIndex + minLen);
        } else return "";
    }
}
