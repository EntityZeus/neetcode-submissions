class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let map1 = {};
        for(let i=0; i<s1.length; i++) {
            map1[s1[i]] = (map1[s1[i]] + 1 || 1);
        }
        const keys = Object.keys(map1);
        let windowSize = s1.length;
        for(let i = 0; i <= s2.length - windowSize; i++) {
            let map2 = {};
            for(let j=i; j<i+windowSize; j++) {
                map2[s2[j]] = (map2[s2[j]] + 1 || 1);
            }
            const map2Key = Object.keys(map2);
            if(map2Key.length === keys.length) {
                let flag = true;
                for(let j = 0; j<keys.length; j++) {
                    if(map1[keys[j]] !== map2[keys[j]]) {
                        flag = false;
                    }
                }
                if(flag) return true;
            }
        }
        return false;
    }
}
