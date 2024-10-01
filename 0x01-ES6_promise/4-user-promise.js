// Author: Bruno Okoth
// This function takes a user's first and last name as parameters and 
// returns a promise that resolves to an object containing those names.

export default function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}
