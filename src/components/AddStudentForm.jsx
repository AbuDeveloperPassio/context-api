import { useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { useStudents } from "../context/StudentContext";

export default function AddStudentForm() {
  const navigate = useNavigate();
  const { addStudent } = useStudents();

  const [form, setForm] = useState({
    name: "",
    roll: "",
    dept: "",
    gpa: ""
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addStudent(form);
    navigate("/");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Name<input name="name" value={form.name} onChange={handleChange} required /></label>
      <label>Roll Number<input name="roll" value={form.roll} onChange={handleChange} required /></label>
      <label>Department<input name="dept" value={form.dept} onChange={handleChange} required /></label>
      <label>GPA<input name="gpa" type="number" min="0" max="10" step="0.1" value={form.gpa} onChange={handleChange} required /></label>
      <button className="primary">Add Student</button>
    </form>
  );
}