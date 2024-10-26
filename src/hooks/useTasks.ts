// useTasks.ts
import { useState } from 'react';
import { TaskProps } from './types'; // Импортируем интерфейс

const useTasks = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([
    { id: 1, title: 'Task 1', description: 'Description 1', completed: false },
    { id: 2, title: 'Task 2', description: 'Description 2', completed: true },
  ]);

  return {
    tasks,
    setTasks,
  };
};

export default useTasks;
