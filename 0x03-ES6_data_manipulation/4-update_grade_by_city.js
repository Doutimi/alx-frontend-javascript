export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);

    if (matchingGrade) {
      return { ...student, grade: matchingGrade.grade };
    }
    return { ...student, grade: 'N/A' };
  }).filter((student) => student.location === city);
}
