// Importing the ClassRoom class from the specified module
// Function to initialize an array of classroom instances with different maximum sizes
// Each instance of ClassRoom is created with a specific maximum number of students
// This function returns an array containing the initialized ClassRoom instances

import ClassRoom from './0-classroom';

export default function initializeRooms() {
  return [
    new ClassRoom(19), // Classroom with a maximum size of 19 students
    new ClassRoom(20), // Classroom with a maximum size of 20 students
    new ClassRoom(34)  // Classroom with a maximum size of 34 students
  ];
}
