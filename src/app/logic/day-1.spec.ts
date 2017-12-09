import { day01_1, day01_2 } from './day-1';

describe('Tests day 01_1', () => {

  it('Test case 1', () => {
    expect(day01_1('1122')).toBe(3);
  });

  it('Test case 2', () => {
    expect(day01_1('1111')).toBe(4);
  });

  it('Test case 3', () => {
    expect(day01_1('1234')).toBe(0);
  });

  it('Test case 4', () => {
    expect(day01_1('91212129')).toBe(9);
  });

  it('Test invalid input', () => {
    expect( () => day01_1('223f')).toThrowError();
  });

});

describe('Test day 01_2', () => {

  it('Test case 1', () => {
    expect(day01_2('1212')).toBe(6);
  });

  it('Test case 2', () => {
    expect(day01_2('1221')).toBe(0);
  });

  it('Test case 3', () => {
    expect(day01_2('123425')).toBe(4);
  });

  it('Test case 4', () => {
    expect(day01_2('123123')).toBe(12);
  });

  it('Test case 4', () => {
    expect(day01_2('12131415')).toBe(4);
  });

  it('Test invalid input', () => {
    expect( () => day01_2('223f')).toThrowError();
  });

  it('Test uneven input length', () => {
    expect(() => day01_2('111')).toThrowError();
  });

});
