import StudentCard from "./StudentCard";
import React from 'react';

export default function StudentList({ students }) {
  if (!students.length) {
    return <p className="empty">No students found.</p>;
  }

  return (
    <div className="grid">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}