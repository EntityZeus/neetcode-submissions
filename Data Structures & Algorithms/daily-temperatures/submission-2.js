class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = [];
        let stack = [];
        for(let i=0; i<temperatures.length; i++) {
            res.push(0);
        }

        stack.push({temp: temperatures[0], index: 0});

        for(let i=1; i<temperatures.length; i++) {
            const top = stack[stack.length - 1];

            if(top.temp <= temperatures[i]) {
                while(stack.length > 0 && temperatures[i] > stack[stack.length - 1].temp) {
                    const top = stack[stack.length - 1];
                    res[top.index] = i - top.index;
                    stack.pop();
                }
                stack.push({temp: temperatures[i], index: i});
            } else {
                stack.push({temp: temperatures[i], index: i});
            }
        }
        return res;
    }
}
