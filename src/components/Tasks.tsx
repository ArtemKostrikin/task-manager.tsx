import React, { useEffect } from "react";
import { useTasks } from "../TaskContext";
import { getTasks } from "../api"; // Подключаем API

const Tasks: React.FC = () => {
  const { tasks, setTasks } = useTasks(); // Используем setTasks из контекста

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks(); // Получаем задачи с API
      setTasks(data); // Обновляем задачи в контексте
    };

    fetchTasks();
  }, [setTasks]);

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>{task.completed ? "Completed" : "Not completed"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
