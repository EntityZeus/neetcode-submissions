class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let hashmap = {};
        for(let i=0; i< s.length; i++) {
            if(s[i] in hashmap) {
                hashmap[s[i]] +=1;
            }else {
                hashmap[s[i]] = 1;
            }
        }
        for(let i=0;i<t.length;i++) {
            if(t[i] in hashmap) {
                hashmap[t[i]] -=1;
            } else {
                return false;
            }
        }

        let value = Object.values(hashmap);
        for(let i=0;i<value.length;i++) {
            if(value[i] < 0 || value[i] > 0) return false;
        }
        return true;
    }
}
