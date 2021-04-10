function getCommonCharacterCount(s1, s2) {
  const arrElements = s1.length <= s2.length ? s1.split('') : s2.split('');
  const iterableArr = s1.length <= s2.length ? s2.split('') : s1.split('');

  let counter = 0;

  for (let i = 0; i < arrElements.length; i++) {
    const currentElement = arrElements[i];

    if (iterableArr.includes(currentElement)) {
      counter++;
      iterableArr.splice(iterableArr.indexOf(currentElement), 1);
    }
  }

  return counter;
}

getCommonCharacterCount('zzzz', 'zzzzzzz');
module.exports = getCommonCharacterCount;
