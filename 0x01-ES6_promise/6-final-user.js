// Author: Bruno Okoth
// This function handles the profile signup process by signing up a user 
// and uploading a photo. It returns an array of results indicating 
// the status of each operation (fulfilled or rejected).

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const res = [];
  
  // Attempt to sign up the user
  try {
    const user = await signUpUser(firstName, lastName);
    res.push({ status: 'fulfilled', value: user });
  } catch (err) {
    res.push({
      status: 'rejected',
      value: err.toString(),
    });
  }

  // Attempt to upload the photo
  try {
    const upload = await uploadPhoto(fileName);
    res.push({ status: 'fulfilled', value: upload });
  } catch (err) {
    res.push({
      status: 'rejected',
      value: err.toString(),
    });
  }

  return res;
}

