import { Link } from "react-router-dom";
import { useFavourites } from "../context/FavouriteContext";

export default function Navbar() {
  const { favourites } = useFavourites();

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand">Student Manager</Link>
        <div className="nav-links">
          <Link to="/">Students</Link>
          <Link to="/add">Add Student</Link>
          <Link to="/favourites">Favourites ({favourites.length})</Link>
        </div>
      </div>
    </nav>
  );
}