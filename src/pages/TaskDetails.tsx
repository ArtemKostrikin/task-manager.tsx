// src/pages/TaskDetail.tsx
import React from "react";
import { useParams } from "react-router-dom";

const TaskDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Получаем ID задачи из URL

  // Здесь вы можете добавить логику для получения данных о задаче по ID
  // Например, с помощью useEffect и useState

  return (
    <div>
      <h1>Детали задачи</h1>
      <p>ID задачи: {id}</p>
      {/* Здесь отобразите данные о задаче */}
    </div>
  );
};

export default TaskDetail;
