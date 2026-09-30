import React from 'react';

import { createContext, useContext, useState } from "react";

const StudentContext = createContext(null);

const initialStudents = [
  { id: 1, name: "Aarav Sharma", roll: "CS2401", dept: "Computer Science", gpa: 9.2 },
  { id: 2, name: "Priya Nair", roll: "CS2402", dept: "Computer Science", gpa: 8.8 },
  { id: 3, name: "Rohan Mehta", roll: "IT2403", dept: "Information Technology", gpa: 8.6 },
  { id: 4, name: "Sneha Reddy", roll: "SE2404", dept: "Software Engineering", gpa: 9.1 },
  { id: 5, name: "Karthik Iyer", roll: "IT2405", dept: "Information Technology", gpa: 8.4 },
  { id: 6, name: "Divya Krishnan", roll: "CS2406", dept: "Computer Science", gpa: 9.0 },
  { id: 7, name: "Arjun Patel", roll: "SE2407", dept: "Software Engineering", gpa: 8.7 },
  { id: 8, name: "Meera Subramaniam", roll: "CS2408", dept: "Computer Science", gpa: 9.3 }
];

export function StudentProvider({ children }) {
  const [students, setStudents] = useState(initialStudents);

  const addStudent = (student) => {
    setStudents((current) => [
      ...current,
      { ...student, id: Date.now(), gpa: Number(student.gpa) }
    ]);
  };

  const removeStudent = (id) => {
    setStudents((current) => current.filter((student) => student.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, removeStudent }}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudents() {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error("useStudents must be used inside StudentProvider");
  }
  return context;
}