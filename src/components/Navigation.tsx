import React from "react";
import { Link } from "react-router-dom";
import navStyles from "../styles/Nav.module.css"; // Убедитесь, что путь верный

const Navigation: React.FC = () => {
  return (
    <nav className={navStyles.navContainer}>
      <Link to="/" className={navStyles.navButton}>
        Home
      </Link>
      <Link to="/tasks" className={navStyles.navButton}>
        Tasks
      </Link>
      <Link to="/profile" className={navStyles.navButton}>
        Profile
      </Link>
    </nav>
  );
};

export default Navigation;
