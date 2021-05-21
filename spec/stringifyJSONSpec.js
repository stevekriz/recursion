describe('stringifyJSON', () => {
  it('should match the result of calling JSON.stringify', () => {
    stringifiableObjects.forEach(test => {
      const expected = JSON.stringify(test);
      const result = stringifyJSON(test);
      expect(result).to.equal(expected);
    });

    unstringifiableValues.forEach(obj => {
      const expected = JSON.stringify(obj);
      const result = stringifyJSON(obj);
      expect(result).to.equal(expected);
    });
  });
});
