import React from "react";

interface Task {
  id: number;
  title: string;
  description: string;
}

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete }) => {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button onClick={() => onDelete(task.id)}>Удалить</button>
    </div>
  );
};

export default TaskItem;
