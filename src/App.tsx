import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { TaskProvider } from "./TaskContext"; // Подключаем TaskProvider
import ErrorBoundary from "./hooks/ErrorBoundary"; // Импортируем ErrorBoundary

// Лениво загружаем страницы
const Home = lazy(() => import("./pages/Home"));
const Tasks = lazy(() => import("./pages/Tasks"));
const Profile = lazy(() => import("./pages/Profile"));
const TaskDetail = lazy(() => import("./pages/TaskDetails"));

const App: React.FC = () => {
  return (
    <TaskProvider>
      {/* Оборачиваем маршруты в TaskProvider */}
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              {/* Защищённый маршрут */}
              <Route path="/tasks/:id" element={<TaskDetail />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </TaskProvider>
  );
};

export default App;
