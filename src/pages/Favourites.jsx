import StudentList from "../components/StudentList";
import { useStudents } from "../context/StudentContext";
import { useFavourites } from "../context/FavouriteContext";

export default function Favourites() {
  const { students } = useStudents();
  const { favourites } = useFavourites();

  const favouriteStudents = students.filter((student) =>
    favourites.includes(student.id)
  );

  return (
    <>
      <h1>Favourite Students</h1>
      <p className="muted page-subtitle">
        Students saved through the FavouriteContext.
      </p>
      <StudentList students={favouriteStudents} />
    </>
  );
}