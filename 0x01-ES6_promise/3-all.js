// Bruno Okoth
// This function handles profile signup by uploading a photo and creating a user.
// It waits for both operations to complete using Promise.all. If successful,
// it logs the response body and the user's full name. If either operation fails,
// it logs an error message.
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([body, fullName]) => 
      console.log(`${body.body} ${fullName.firstName} ${fullName.lastName}`))
    .catch(() => console.log('Signup system offline'));
}
