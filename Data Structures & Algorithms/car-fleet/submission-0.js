class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const newArr = [];
        for(let i=0; i<position.length; i++) {
            newArr.push({ position : position[i], speed: speed[i]})
        }

        newArr.sort((a,b) => a.position - b.position);

        const stack = [newArr[newArr.length - 1]];

        for(let i = newArr.length - 2; i>=0; i--) {
            const top = stack[stack.length - 1];
            const timeToReachByTop = (target - top.position) / top.speed;
            const timeToReachByCurrent = (target - newArr[i].position) / newArr[i].speed;
            if(timeToReachByTop < timeToReachByCurrent) {
                stack.push(newArr[i]);
            }
        }

        return stack.length;
    }
}
