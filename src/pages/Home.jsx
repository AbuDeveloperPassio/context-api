import { useState } from "react";
import StudentList from "../components/StudentList";
import { useStudents } from "../context/StudentContext";

export default function Home() {
  const { students } = useStudents();
  const [search, setSearch] = useState("");

  const filtered = students.filter((student) =>
    `${student.name} ${student.roll} ${student.dept}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <section className="hero">
        <div>
          <h1>Students</h1>
          <p className="muted">Manage students using React Context API.</p>
        </div>
        <input
          className="search"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>
      <StudentList students={filtered} />
    </>
  );
}