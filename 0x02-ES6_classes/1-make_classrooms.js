// Importing the ClassRoom class from the specified module
import ClassRoom from './0-classroom';

// Function to initialize an array of classroom instances with different maximum sizes
export default function initializeRooms() {
  // Creating and returning an array with new ClassRoom instances
  return [
    new ClassRoom(19), // Classroom with a maximum size of 19 students
    new ClassRoom(20), // Classroom with a maximum size of 20 students
    new ClassRoom(34)  // Classroom with a maximum size of 34 students
  ];
}
