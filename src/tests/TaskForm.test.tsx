// Импортируем необходимые библиотеки и компоненты для тестирования
import { render, screen, fireEvent } from "@testing-library/react"; // Импортируем функции для рендеринга и работы с событиями
import TaskForm from "../components/TaskForm"; // Импортируем компонент TaskForm

// Тест для проверки валидации заголовка
test("shows validation error when title is too short", () => {
  const handleSubmit = jest.fn(); // Создаем мок-функцию для проверки отправки формы
  render(<TaskForm onSubmit={handleSubmit} />); // Рендерим компонент TaskForm с мок-функцией

  const titleInput = screen.getByLabelText(/title/i); // Получаем элемент поля заголовка по метке
  const submitButton = screen.getByText(/submit/i); // Получаем кнопку отправки по тексту

  // Заполняем поле заголовка слишком коротким текстом
  fireEvent.change(titleInput, { target: { value: "Hi" } });
  fireEvent.click(submitButton); // Нажимаем кнопку отправки

  // Ожидаем появления сообщения об ошибке валидации
  expect(
    screen.getByText(/title must be at least 3 characters/i)
  ).toBeInTheDocument();
});

// Тест для проверки успешной отправки формы
test("submits valid form data", () => {
  const handleSubmit = jest.fn(); // Создаем мок-функцию для проверки отправки формы
  render(<TaskForm onSubmit={handleSubmit} />); // Рендерим компонент TaskForm с мок-функцией

  // Получаем элементы формы
  const titleInput = screen.getByLabelText(/title/i); // Поле заголовка
  const descriptionInput = screen.getByLabelText(/description/i); // Поле описания
  const submitButton = screen.getByText(/submit/i); // Кнопка отправки

  // Заполняем корректные данные в поля формы
  fireEvent.change(titleInput, { target: { value: "Valid Title" } }); // Заполняем заголовок
  fireEvent.change(descriptionInput, {
    target: { value: "Valid Description" },
  }); // Заполняем описание
  fireEvent.click(submitButton); // Нажимаем кнопку отправки

  // Убедимся, что мок-функция была вызвана с правильными данными
  expect(handleSubmit).toHaveBeenCalledWith({
    title: "Valid Title",
    description: "Valid Description",
  });
});
