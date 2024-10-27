import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Nav.module.css";
import homeStyles from "../styles/Home.module.css"; // Предполагаем, что есть свой отдельный файл стилей для главной страницы


const Home: React.FC = () => {
  return (
    <div className={homeStyles.pageContainer}>
      <h1>Welcome to the Task Manager</h1>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.navButton}>
          Home
        </Link>
        <Link to="/tasks" className={styles.navButton}>
          Tasks
        </Link>
        <Link to="/profile" className={styles.navButton}>
          Profile
        </Link>
      </div>
      <p>
        This is a simple task management application where you can create,
        delete, and manage your tasks.
      </p>
    </div>
  );
};

export default Home;
