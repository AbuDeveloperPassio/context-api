import AddStudentForm from "../components/AddStudentForm";

export default function AddStudent() {
  return (
    <>
      <h1>Add Student</h1>
      <p className="muted page-subtitle">
        The form updates shared state through StudentContext.
      </p>
      <AddStudentForm />
    </>
  );
}