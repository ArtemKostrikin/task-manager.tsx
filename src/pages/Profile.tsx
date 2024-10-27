import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Nav.module.css";
import profileStyles from "../styles/Profile.module.css"; // Предполагаем, что есть свой отдельный файл стилей для страницы профиля

const Profile: React.FC = () => {
  return (
    <div className={profileStyles.pageContainer}>
      <h1>User Profile</h1>
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
      <p>This is where you can manage your profile settings.</p>
    </div>
  );
};

export default Profile;
