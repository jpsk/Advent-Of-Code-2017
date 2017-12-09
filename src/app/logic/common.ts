export const checkIfInt = (val: string): void => {
  if (isNaN(parseInt(val, 10))) {
    throw new Error('Invalid Input: Please make sure that all characters are numeric');
  }
};
