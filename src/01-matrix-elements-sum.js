/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const lengthX = matrix[0].length;
  const lengthY = matrix.length;
  let sum = 0;

  for (let i = 0; i < lengthY; i++) {
    for (let j = 0; j < lengthX; j++) {
      const currentNumber = matrix[i][j];
      const numberOnTop = i - 1 < 0 ? 1 : matrix[i - 1][j];

      if (numberOnTop !== 0 && currentNumber !== 0) {
        sum += currentNumber;
      }
    }
  }

  return sum;
}

module.exports = getMatrixElementsSum;
