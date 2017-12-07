import { parseInput, parseInput2 } from './day-1';

describe('Tests day 1 (problem one) algorithm', () => {

  it('Test case 1', () => {
    expect(parseInput('1122')).toBe(3);
  });

  it('Test case 2', () => {
    expect(parseInput('1111')).toBe(4);
  });

  it('Test case 3', () => {
    expect(parseInput('1234')).toBe(0);
  });

  it('Test case 4', () => {
    expect(parseInput('91212129')).toBe(9);
  });

  it('Test invalid input', () => {
    expect( () => parseInput('223f')).toThrowError('Invalid Input');
  });

});

describe('Test day 1 (problem two) algorithm', () => {

  it('Test case 1', () => {
    expect(parseInput2('1212')).toBe(6);
  });

  it('Test case 2', () => {
    expect(parseInput2('1221')).toBe(0);
  });

  it('Test case 3', () => {
    expect(parseInput2('123425')).toBe(4);
  });

  it('Test case 4', () => {
    expect(parseInput2('123123')).toBe(12);
  });

  it('Test case 4', () => {
    expect(parseInput2('12131415')).toBe(4);
  });

  it('Test invalid input', () => {
    expect( () => parseInput2('223f')).toThrowError('Invalid Input');
  });

});
