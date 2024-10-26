import React, { useCallback } from "react";
import { useForm } from "react-hook-form"; // Импортируем хук useForm из React Hook Form
import { yupResolver } from "@hookform/resolvers/yup"; // Подключаем resolver для использования Yup
import * as yup from "yup"; // Импортируем Yup для создания схемы валидации

interface TaskFormData {
  title: string;
  description: string;
}

const schema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required") // Поле обязательно
    .min(3, "Title must be at least 3 characters"), // Минимальная длина - 3 символа
  description: yup
    .string()
    .required("Description is required") // Поле обязательно
    .min(5, "Description must be at least 5 characters"), // Минимальная длина - 5 символов
});

const TaskForm: React.FC<{ onSubmit: (data: TaskFormData) => void }> = ({
  onSubmit,
}) => {
  const {
    register, // Используется для регистрации полей формы
    handleSubmit, // Обработка отправки формы
    formState: { errors }, // Содержит ошибки валидации
  } = useForm<TaskFormData>({
    resolver: yupResolver(schema), // Подключаем Yup-схему для валидации
  });

  // Мемоизируем обработчик отправки формы
  const memoizedOnSubmit = useCallback(
    (data: TaskFormData) => {
      onSubmit(data);
    },
    [onSubmit]
  ); // Зависимость — функция onSubmit

  return (
    <form onSubmit={handleSubmit(memoizedOnSubmit)}>
      <div>
        <label>Title</label>
        <input {...register("title")} /> {/* Регистрируем поле title */}
        {errors.title && <p>{errors.title.message}</p>}{" "}
        {/* Показываем ошибку, если она есть */}
      </div>
      <div>
        <label>Description</label>
        <textarea {...register("description")} />{" "}
        {/* Регистрируем поле description */}
        {errors.description && <p>{errors.description.message}</p>}{" "}
        {/* Показываем ошибку, если она есть */}
      </div>
      <button type="submit">Submit</button> {/* Кнопка для отправки формы */}
    </form>
  );
};

export default TaskForm;
