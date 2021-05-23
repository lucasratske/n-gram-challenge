const ngramUtils = require('../../src/app/utils/ngram-utils');

describe('N-Grams Code Challenge', () => {
  it('should return empty array', () => {
    expect(ngramUtils.getNGrams('')).toStrictEqual([]);
    expect(ngramUtils.getNGrams()).toStrictEqual([]);
  });

  it('should return just the first n-gram', () => {
    const arrayToDivide = 'Show me the code.'.split(' ');
    expect(ngramUtils.getDividedArrays(arrayToDivide)).toStrictEqual([
      'Show',
      'Show me',
      'Show me the',
      'Show me the code.',
    ]);
  });

  it('should return the entire n-gram', () => {
    expect(ngramUtils.getNGrams('Show me the code.')).toStrictEqual([
      'Show',
      'Show me',
      'Show me the',
      'Show me the code',
      'me',
      'me the',
      'me the code',
      'the',
      'the code',
      'code',
    ]);
  });
});
