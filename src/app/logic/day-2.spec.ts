import { day02_1, day02_2 } from './day-2';


describe('Tests day 2 (problem one) algorithm', () => {

  it('Test case day 2_01', () => {
    expect(day02_1('5\t1\t9\t5\n7\t5\t3\n2\t4\t6\t8')).toBe(18);
  });

  it('Test case day 2_02', () => {
    expect(day02_2('5\t9\t2\t8\n9\t4\t7\t3\n3\t8\t6\t5')).toBe(9);
  });

});
