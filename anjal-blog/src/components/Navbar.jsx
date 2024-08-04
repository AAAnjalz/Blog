import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="brand">Anjal's Blog</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/create">Create</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
