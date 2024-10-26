import { render, screen } from "@testing-library/react";
import TaskList from "../components/TaskList";

const tasks = [
  {
    id: 1,
    title: "Test Task 1",
    description: "Description 1",
    completed: false,
  },
  {
    id: 2,
    title: "Test Task 2",
    description: "Description 2",
    completed: true,
  },
];

test("renders a list of talks", () => {
  render(<TaskList tasks={tasks} />);

  expect(screen.getByText("Test Task 1")).toBeInTheDocument();
  expect(screen.getByText("Test Task 2")).toBeInTheDocument();

  expect(screen.getByText("Completed")).toBeInTheDocument();
  expect(screen.getByText("Not Completed")).toBeInTheDocument();
});
