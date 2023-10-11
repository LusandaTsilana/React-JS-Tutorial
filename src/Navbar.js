import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div className="nav-list">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
};
