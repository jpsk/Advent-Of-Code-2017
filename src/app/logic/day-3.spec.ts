import { day03_1 } from './day-3';

describe('Tests day 3 problem 1', () => {

  it('Test case 1', () => {
    expect(day03_1(1)).toBe(0)
  });

  it('Test case 2', () => {
    expect(day03_1(12)).toBe(3)
  });

  it('Test case 3', () => {
    expect(day03_1(23)).toBe(2)
  });

  it('Test case 3', () => {
    expect(day03_1(1024)).toBe(31)
  });

});
