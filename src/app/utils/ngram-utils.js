/**
 * Build a array with the sequence of the first part of a N-gram
 * @param {Array} array Array of characteres
 * @returns {Array}
 */
const getDividedArrays = (array) => {
  const arrayToReturn = [];
  array.forEach((element, index) => {
    const previousElements = index > 0 ? array.slice(0, index) : [];
    arrayToReturn.push(
      previousElements.length > 0
        ? `${previousElements.join(' ')} ${element}`
        : element
    );
  });
  return arrayToReturn;
};

/**
 * Build a N-Gram
 * @param {string} str Represents a sequence of characteres/words/numbers separated by a white space
 * @returns {Array} Array of strings representing the N-Grams
 */
const getNGrams = (str) => {
  if (str === undefined) return [];
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').trim();
  if (str === '') return [];

  const arrayStr = str.split(' ');

  let nGramsArray = [];

  for (let i = 0; i < arrayStr.length; i++) {
    nGramsArray = [
      ...nGramsArray,
      ...getDividedArrays(arrayStr.slice(i, arrayStr.length)),
    ];
  }

  return nGramsArray;
};

module.exports = { getNGrams, getDividedArrays };
