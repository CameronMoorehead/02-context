'use strict';

const { map, filter, reduce, slice } = require('../lib/fp-curry');

describe('fp.js', () => {

  describe('fp.map', () => {
    test('return an array with each element multiplied by 2', () => {
      const callback = element => { return element * 2; };
      const collection = [1, 2, 3];

      const multiplyBy2 = map(callback);
      const result = multiplyBy2(collection);
      const expected = [2, 4, 6];

      expect(result).toEqual(expected);
    });

    test('return an array with each string element doubled', () => {
      const callback = element => { return element.concat(element); };
      const collection = ['hello', 'there', 'world', '!'];

      const doubleString = map(callback);
      const result = doubleString(collection);
      const expected = ['hellohello', 'therethere', 'worldworld', '!!'];

      expect(result).toEqual(expected);
    });

    test('throw an exception if callback is not a function', () => {
      const callback = 'not a function';
      const collection = [1, 2, 3];
      expect(
        () => {
          map(callback)(collection);
        }
      ).toThrow();
    });

    test('throw an exception if collection is not an array', () => {
      const callback = element => { return element; };
      const collection = 'not an array';
      expect(
        () => {
          map(callback)(collection);
        }
      ).toThrow();
    });
  });

  describe('fp.filter', () => {
    test('return an array without even numbers', () => {
      const callback = element => { return element % 2; };
      const collection = [1, 2, 3, 4, 5, 6];

      const filterEvens = filter(callback);
      const result = filterEvens(collection);
      const expected = [1, 3, 5];

      expect(result).toEqual(expected);
    });

    test('return an array with strings only with length greater than 5', () => {
      const callback = element => { return element.length > 5; };
      const collection = ['one', 'three', 'sixteen'];

      const filterShortStrings = filter(callback);
      const result = filterShortStrings(collection);
      const expected = ['sixteen'];

      expect(result).toEqual(expected);
    });

    test('throw an exception if callback is not a function', () => {
      const callback = 'not a function';
      const collection = [1, 2, 3, 4, 5, 6];
      expect(
        () => {
          filter(callback)(collection);
        }
      ).toThrow();
    });

    test('throw an exception if collection is not an array', () => {
      const callback = element => { return element.length > 5; };
      const collection = 'not an array';
      expect(
        () => {
          filter(callback)(collection);
        }
      ).toThrow();
    });
  });

  describe('fp.reduce', () => {
    test('return a single combined-added result from an array', () => {
      const callback = (acc, current) => { return acc + current; };
      const initialState = 0;
      const collection = [1, 2, 3, 4];
      const expected = 10;
      expect(reduce(callback, initialState, collection)).toBe(expected);
    });

    test('return a single word from an array of words', () => {
      const callback = (acc, current) => { return acc + current; };
      const initialState = '';
      const collection = ['hello', 'there', 'world', '!'];
      const expected = 'hellothereworld!';
      expect(reduce(callback, initialState, collection)).toBe(expected);
    });

    test('throw an exception if callback is not a function', () => {
      const callback = 'not a function';
      const initialState = 0;
      const collection = [1, 2, 3, 4];
      expect(
        () => {
          reduce(callback, initialState, collection);
        }
      ).toThrow();
    });

    test('throw an exception if collection is not an array', () => {
      const callback = (acc, current) => { return acc + current; };
      const initialState = '';
      const collection = 'not an array';
      expect(
        () => {
          reduce(callback, initialState, collection);
        }
      ).toThrow();
    });
  });

  describe('fp.slice', () => {
    test('return an sub array from an original array', () => {
      const begin = 1;
      const end = 3;
      const collection = [1, 2, 3, 4];
      const expected = [2, 3];
      expect(slice(begin, end, collection)).toEqual(expected);
    });

    test('throw an exception if collection is not an array', () => {
      const begin = 1;
      const end = 3;
      const collection = 'not an array';
      expect(
        () => {
          slice(begin, end, collection);
        }
      ).toThrow();
    });
  });
});
