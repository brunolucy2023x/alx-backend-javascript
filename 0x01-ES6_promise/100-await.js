// Bruno Okoth
// This function asynchronously uploads a photo and creates a user.
// It returns an object containing the uploaded photo and user data,
// or null values if an error occurs during the process.
import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  try {
    return { photo: await uploadPhoto(), user: await createUser() };
  } catch (error) {
    return { photo: null, user: null };
  }
};

export default asyncUploadUser;
