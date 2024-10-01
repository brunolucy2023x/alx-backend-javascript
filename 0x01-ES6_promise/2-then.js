// Bruno Okoth
// This function handles a promise from an API. It returns an object
// with a success status and message if the promise resolves, 
// creates an Error object if it rejects, and logs a message when 
// the promise is settled (either resolved or rejected).
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(console.log('Got a response from the API'));
}
