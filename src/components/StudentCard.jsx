import { useFavourites } from "../context/FavouriteContext";
import { useStudents } from "../context/StudentContext";
import React from 'react';

export default function StudentCard({ student }) {
  const { removeStudent } = useStudents();
  const { isFavourite, addFavourite, removeFavourite } = useFavourites();
  const favourite = isFavourite(student.id);

  const toggleFavourite = () => {
    favourite ? removeFavourite(student.id) : addFavourite(student.id);
  };

  return (
    <article className="card">
      <div className="card-top">
        <div>
          <h3>{student.name}</h3>
          <p className="muted">{student.roll}</p>
        </div>
        <button className="icon-btn" onClick={toggleFavourite}>
          {favourite ? "★" : "☆"}
        </button>
      </div>

      <p><strong>Department:</strong> {student.dept}</p>
      <p><strong>GPA:</strong> {student.gpa}</p>

      <button className="danger" onClick={() => removeStudent(student.id)}>
        Remove
      </button>
    </article>
  );
}