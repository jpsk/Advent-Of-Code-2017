export const checkAndSumNextVal = (curr: string, next: string, sum: number): number => {
  return parseInt(curr, 10) === parseInt(next, 10)
    ? sum + parseInt(curr, 10)
    : sum;
};

export const checkIfInt = (val: string): void => {
  if (isNaN(parseInt(val, 10))) {
    throw new Error('Invalid Input');
  }
};

export const parseInput = (val: string): number => {
  let sum = 0;
  for (let i = 0; i < val.length; i++) {
    checkIfInt(val[i]);
    sum = i === val.length - 1
      ? checkAndSumNextVal(val[i], val[0], sum)
      : checkAndSumNextVal(val[i], val[i + 1], sum)
  }
  return sum;
};


export const parseInput2 = (val: string): number => {
  let sum = 0;

  for (let i = 0; i < val.length; i++) {
    checkIfInt(val[i]);
  }
  return sum;
};
