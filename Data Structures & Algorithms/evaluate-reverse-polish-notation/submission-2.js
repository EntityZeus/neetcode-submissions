class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];

        for(let i = 0;i < tokens.length; i++) {
            if(tokens[i] === '+' || tokens[i] === '-' || tokens[i] === '*'
            || tokens[i] === '/') {
                if(tokens[i] === '+') {
                    const result = stack[stack.length - 2] + stack[stack.length - 1];
                    stack.pop();
                    stack.pop();
                    stack.push(result);
                } else if(tokens[i] === '-') {
                    const result = stack[stack.length - 2] - stack[stack.length - 1];
                    stack.pop();
                    stack.pop();
                    stack.push(result);
                } else if(tokens[i] === '*') {
                    const result = stack[stack.length - 2] * stack[stack.length - 1];
                    stack.pop();
                    stack.pop();
                    stack.push(result);
                } else {
                    const result = stack[stack.length - 2] / stack[stack.length - 1];
                    stack.pop();
                    stack.pop();
                    stack.push(parseInt(result));
                }
                
            } else {
                stack.push(parseInt(tokens[i]));
            }
        }
        return stack[0];
    }
}
