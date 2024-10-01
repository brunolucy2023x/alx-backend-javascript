// Bruno Okoth
// This function returns a Promise that resolves with a success response
// if the 'success' argument is true, or rejects with an error if false.
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
