/* eslint-disable func-names */
/* eslint-disable no-undef */

// test cases are described in fixtures.js

describe('parseJSON', () => {
  it('should match the result of calling JSON.parse', () => {
    parseableStrings.forEach((test) => {
      const expected = JSON.parse(test);
      const result = parseJSON(test);
      const equality = _.isEqual(result, expected); // why can't we use `===` here?
      // Replace this line with an `expect` statement that tests
      // the behavior described by the `it` string
      expect(equality).to.equal(true);
    });
  });

  it('should throw an error for invalid stringified JSON', () => {
    unparseableStrings.forEach((test) => {
      const fn = function () {
        parseJSON(test);
      };
      // if you'd prefer, you can write your version of parseJSON
      // so that it passes this test instead of the one on line 21.
      // expect(parseJSON(test)).to.equal(undefined);
      expect(fn).to.throw(SyntaxError);
    });
  });
});
