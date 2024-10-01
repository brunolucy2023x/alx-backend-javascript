// Author: Bruno Okoth
// This function takes a numerator and a denominator as parameters. 
// It throws an error if the denominator is zero to prevent division by zero, 
// and returns the result of the division otherwise.

export default function divideFunction(numerator, denominator) {
  if (denominator === 0) throw Error('cannot divide by 0');

  return numerator / denominator;
}
