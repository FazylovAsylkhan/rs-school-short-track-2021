/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const newArr = String(n).split('');
  const number = String(n)
    .split('')
    .sort((a, b) => a - b)[0];
  newArr.splice(newArr.indexOf(number), 1);
  const result = +newArr.join('');

  return result;
}

module.exports = deleteDigit;
