/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let column = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  let box = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

  for (let i = 0; i < 9; i++) {
    // check rows
    let obj = {};
    for (let j = 0; j < 9; j++) {
      let curNum = board[i][j];
      if (curNum != ".") {
        // index of box of 3 x 3
        const boxNum = Math.trunc(i / 3) * 3 + Math.trunc(j / 3);
        // check if the number is invalid
        if (
          column[j][board[i][j]] == 1 ||
          box[boxNum][curNum] == 1 ||
          obj[curNum] == 1
        ) {
          return false;
        } else {
          // add to row
          obj[curNum] = 1;
          // add to box of 3 x 3
          box[boxNum][curNum] = 1;
          // add to column
          column[j][curNum] = 1;
        }
      }
    }
  }

  return true;
};

