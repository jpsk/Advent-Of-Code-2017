export const checkAndSumNextVal = (curr: string, next: string, sum: number): number => {
  return parseInt(curr, 10) === parseInt(next, 10)
    ? sum + parseInt(curr, 10)
    : sum;
};

export const checkIfInt = (val: string): void => {
  if (isNaN(parseInt(val, 10))) {
    throw new Error('Invalid Input: Please make sure that all characters are numeric');
  }
};

export const parseInput = (val: string): number => {

  const length = val.length;
  let sum = 0;

  for (let i = 0; i < length; i++) {

    const next = i === length - 1
      ? val[0]
      : val[i + 1];

    checkIfInt(val[i]);
    sum = checkAndSumNextVal(val[i], next, sum);
  }

  return sum;
};


export const parseInput2 = (val: string): number => {
  const length = val.length;
  const halfway = val.length / 2;

  let sum = 0;

  // Check for uneven input
  if (val.length % 2 !== 0) {
    throw new Error('Invalid input: The length of input characters should be even number')
  }

  for (let i = 0; i < length; i++) {
    checkIfInt(val[i]);

    const next = i > halfway - 1
      ? val[i - halfway]
      : val[i + halfway];

    sum = checkAndSumNextVal(val[i], next, sum);

  }
  return sum;
};
