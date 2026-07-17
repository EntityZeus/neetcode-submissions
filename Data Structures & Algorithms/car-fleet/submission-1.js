class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let positionAndSpeed = [];
        for(let i=0; i<position.length; i++) {
            positionAndSpeed.push({position: position[i], speed: speed[i]});
        }

        positionAndSpeed.sort((a,b) => a.position - b.position);

        let stack = [positionAndSpeed[positionAndSpeed.length - 1]];


        for(let i = positionAndSpeed.length - 2; i>=0; i--) {
            const top = stack[stack.length - 1];
            const timeToReachByTop = (target - top.position) / top.speed;
            const timeToReachByCurrent = (target - positionAndSpeed[i].position) / positionAndSpeed[i].speed;

            if(timeToReachByTop < timeToReachByCurrent) {
                stack.push(positionAndSpeed[i]);
            }
        }

        return stack.length;
    }
}
