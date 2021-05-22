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

console.log(getNGrams('Show me the code.'));

module.exports = { getNGrams, getDividedArrays };
