// Author: Bruno Okoth
// This function takes a filename as a parameter and returns a promise 
// that rejects with an error message indicating that the file cannot be processed.

export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
