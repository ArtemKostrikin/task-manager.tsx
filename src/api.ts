import axios from 'axios';
import { TaskProps } from './hooks/types';

const api = axios.create({
  baseURL: 'https://your-api-url.com', // Укажи URL своего API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Получить все задачи
export const getTasks = async () => {
  const response = await api.get('/tasks');
  return response.data;
};

// Создать новую задачу
export const createTask = async (task: { title: string; description: string }): Promise<TaskProps> => {
  const response = await api.post('/tasks', task);
  return { ...response.data, completed: false }; // Добавляем completed
};


// Обновить задачу
export const updateTask = async (id: string, task: { title: string; description: string }) => {
  const response = await api.put(`/tasks/${id}`, task);
  return response.data;
};

// Удалить задачу
export const deleteTask = async (id: string) => {
  const response = await api.delete(`/tasks/${id}`);
  return response.data;
};
