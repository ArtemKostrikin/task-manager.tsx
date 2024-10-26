import React from "react";
import TaskForm from "../components/TaskForm";
import { useMutation, useQueryClient } from "react-query";
import { createTask } from "../api";

const CreateTask: React.FC = () => {
  const queryClient = useQueryClient();

  // Настраиваем мутацию с React Query
  const mutation = useMutation(createTask, {
    onSuccess: () => {
      // Инвалидация и обновление данных после успешного создания задачи
      queryClient.invalidateQueries("tasks");
    },
  });

  // Функция для отправки данных формы
  const handleCreateTask = (data: { title: string; description: string }) => {
    mutation.mutate(data); // Запуск мутации с данными из формы
  };

  return (
    <div>
      <h1>Create Task</h1>
      <TaskForm onSubmit={handleCreateTask} />
      {mutation.isLoading && <p>Creating task...</p>}{" "}
      {/* Отображение загрузки */}
      {mutation.isError && <p>Error creating task</p>}{" "}
      {/* Отображение ошибки */}
      {mutation.isSuccess && <p>Task created successfully!</p>}{" "}
      {/* Успешное сообщение */}
    </div>
  );
};

export default CreateTask;
