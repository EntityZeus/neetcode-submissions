class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = [];
        let stack = [];

        for(let i=0;i<temperatures.length;i++) {
            res.push(0);
        }
        stack.push({index : 0, temp : temperatures[0]});
        for(let i=1;i<temperatures.length;i++) {
            const top = stack[stack.length - 1];
            if(top.temp >= temperatures[i]) {
                stack.push({ index: i, temp: temperatures[i]});
            } else {
                while(stack.length > 0 && temperatures[i] > stack[stack.length - 1].temp) {
                    const stackTop = stack[stack.length - 1];
                    res[stackTop.index] = i - stackTop.index;
                    stack.pop();
                }
                stack.push({ index: i, temp: temperatures[i]});
            }
        }
        return res;
    }
}
