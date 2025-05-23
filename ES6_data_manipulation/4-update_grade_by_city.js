export default function updateStudentGradeByCity(students, city, newGrades) {
    if (!Array.isArray(students)) {
      return [];
    }
    
    if (!Array.isArray(newGrades)) {
      return students.filter(student => student.location === city)
                     .map(student => ({ ...student, grade: 'N/A' }));
    }
    
    return students.filter(student => student.location === city)
                   .map(student => {
                     const gradeObj = newGrades.find(grade => grade.studentId === student.id);
                     return { ...student, grade: gradeObj ? gradeObj.grade : 'N/A' };
                   });
  }
  