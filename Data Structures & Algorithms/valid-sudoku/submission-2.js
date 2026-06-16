class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let row = {};
        let col = {};
        let box = {};
        for(let i=0;i<9;i++) {
            for(let j=0;j<9;j++) {
                if(board[i][j] === '.') continue;
                const rowVal = `row-${i}-${board[i][j]}`;
                const colVal = `col-${j}-${board[i][j]}`;
                const boxId = Math.floor(i/3)*3 + Math.floor(j/3);
                const boxVal = `box-${boxId}-${board[i][j]}`;
                if(row[rowVal] || col[colVal] || box[boxVal]) return false;
                row[rowVal] = true;
                col[colVal] = true;
                box[boxVal] = true;
            }
        }
        return true;
    }
}
