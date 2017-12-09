import { checkIfInt } from './common';

// Todo: Refactor recurring code

export const day02_1 = (val: string): any => {
  const input = val
    .split('\n')
    .map(row => row
      .split('\t')
      .map(val => {
        checkIfInt(val);
        return parseInt(val, 10);
      })
    );

  return input
    .map(i => Math.max(...i) - Math.min(...i))
    .reduce((prev, curr) => prev + curr, 0);
};

export const day02_2 = (val: string): any => {
  const input = val
    .split('\n')
    .map(row => row
      .split('\t')
      .map(val => {
        checkIfInt(val);
        return parseInt(val, 10);
      })
    );

  return input.map(row => {

    //Iterate through all row elements starting at 0
    let endResult = 0;

    // First divide element
    for (let i = 0; i < row.length; i++) {
      const base = row[i];

      // Second divide element
      for (let j = 0; j < row.length; j++) {
        if (base % row[j] === 0 && base !== row[j]) {
          endResult = base / row[j];
          break;
        }
      }
    }
    return endResult;
  }).reduce((p, c) => p + c, 0);
};
