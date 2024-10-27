import React, { useState } from "react";
import { useTasks } from "../TaskContext";
import { Link } from "react-router-dom";
import styles from "../styles/Tasks.module.css";
import navStyles from "../styles/Nav.module.css";

const Tasks: React.FC = () => {
  const { tasks, setTasks } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = () => {
    if (title && description) {
      const newTask = {
        id: tasks.length + 1,
        title,
        description,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTitle("");
      setDescription("");
    }
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className={`${styles.taskContainer} ${styles.pageContainer}`}>
      <h1>Tasks</h1>
      <div className={styles.taskForm}>
        <input
          className={styles.input}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
        />
        <input
          className={styles.input}
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul className={styles.taskList}>
        {tasks.length === 0 ? (
          <p className={styles.message}>No tasks available.</p>
        ) : (
          tasks.map((task) => (
            <li key={task.id} className={styles.task}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))
        )}
      </ul>
      <div className={navStyles.navContainer}>
        <Link to="/" className={navStyles.navButton}>
          Home
        </Link>
        <Link to="/tasks" className={navStyles.navButton}>
          Tasks
        </Link>
        <Link to="/profile" className={navStyles.navButton}>
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Tasks;
