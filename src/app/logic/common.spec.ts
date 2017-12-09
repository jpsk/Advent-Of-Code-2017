import { checkIfInt } from './common';

describe('Tests Utility functions', () => {

  it('(checkIfInt) Handles input (invalid)', () => {
    expect(() => checkIfInt('a')).toThrowError();
  });

  it('(checkIfInt) Handles input (valid)', () => {
    expect(() => checkIfInt('2')).not.toThrowError();
  });

});
