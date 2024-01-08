export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }
  if (!city) {
    return [];
  }

  return students.filter((student) => student.location === city);
}
