import React, { useMemo } from "react";
import { TaskProps } from "../hooks/types"; // Импортируем интерфейс

interface TaskListProps {
  tasks: TaskProps[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  // Мемоизируем список задач, чтобы он не пересчитывался при каждом рендере
  const memoizedTasks = useMemo(() => {
    return tasks.map((task) => (
      <li key={task.id}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>{task.completed ? "Completed" : "Not completed"}</p>
      </li>
    ));
  }, [tasks]); // Зависимостью будет массив tasks — пересчитается только, если tasks изменится

  return <ul>{memoizedTasks}</ul>;
};

export default TaskList;
