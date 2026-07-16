class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(let i=0;i<matrix.length;i++) {
            //check if this target is present in the range.
            if(target >= matrix[i][0] && target <= matrix[i][matrix[i].length - 1]) {
                let left = 0, right = matrix[i].length;
                while(left <= right) {
                    const mid = Math.floor((right + left) / 2);
                    if(matrix[i][mid] === target) {
                        return true;
                    }
                    if(target > matrix[i][mid]) {
                        left = mid + 1;
                    } else {
                        right = mid - 1;
                    }
                }
            }
        }
        return false;
    }
}
