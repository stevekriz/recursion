// test cases are described in fixtures.js

describe('parseJSON', () => {
  it('should match the result of calling JSON.parse', () => {
    parseableStrings.forEach((test) => {
      const expected = JSON.parse(test);
      const result = parseJSON(test);
      const equality = _.isEqual(result, expected);
      expect(equality).to.equal(true);
    });
  });

  it('should throw an error for invalid stringified JSON', () => {
    unparseableStrings.forEach((test) => {
      const fn = function () {
        parseJSON(test);
      };

      expect(fn).to.throw(SyntaxError);
    });
  });
});
