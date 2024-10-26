import React, { createContext, useContext, useState, ReactNode } from "react";

// Определяем тип контекста
interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface TaskContextType {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>; // Добавляем setTasks
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks должен использоваться внутри TaskProvider");
  }
  return context;
};

// Провайдер контекста
export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
