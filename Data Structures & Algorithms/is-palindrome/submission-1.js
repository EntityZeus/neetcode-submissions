class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let validChars = new Set();
        let small = 97;

        for(let i=0;i<26;i++) {
            validChars.add(String.fromCharCode(small + i));
        }
        for(let i=0;i<10;i++) {
            validChars.add(String(i));
        }

        let testStr = '';
        for(let i=0;i<s.length;i++) {
            let char = s[i].toLowerCase();
            if(validChars.has(char)) {
                testStr+=char;
            }
        }
        let revStr = testStr.split('').reverse().join('');
        return revStr === testStr;
    }
}
