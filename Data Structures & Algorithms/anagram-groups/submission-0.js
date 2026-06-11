class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        for(let i = 0; i<strs.length; i++) {
            let charArr = strs[i].split('');
            let sortedStr = charArr.sort().join('');
            if(sortedStr in map) {
                map[sortedStr].push(i);
            } else {
                map[sortedStr] = [i];
            }
        }
        let res = [];
        let keys = Object.keys(map);
        keys.forEach(key=>{
            let tempArr = [];
            map[key].forEach(itemIndex => {
                tempArr.push(strs[itemIndex]);
            })
            res.push(tempArr);
        })
        return res;
    }
}
