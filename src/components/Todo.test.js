import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

test("renders Todo component", () => {
  render(<Todo />);
  expect(screen.getByText("Todo List")).toBeInTheDocument();
});

test("adds a task to the list", () => {
  render(<Todo />);
  const input = screen.getByPlaceholderText("Enter task");
  const button = screen.getByText("Add Task");

  fireEvent.change(input, { target: { value: "Learn React" } });
  fireEvent.click(button);

  expect(screen.getByText("Learn React")).toBeInTheDocument();
});

test("edits a task", () => {
  render(<Todo />);
  const input = screen.getByPlaceholderText("Enter task");
  const button = screen.getByText("Add Task");

  fireEvent.change(input, { target: { value: "Learn React" } });
  fireEvent.click(button);

  fireEvent.click(screen.getByText("Edit"));
  fireEvent.change(input, { target: { value: "Learn React Testing" } });
  fireEvent.click(button);

  expect(screen.getByText("Learn React Testing")).toBeInTheDocument();
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});

test("deletes a task", () => {
  render(<Todo />);
  const input = screen.getByPlaceholderText("Enter task");
  const button = screen.getByText("Add Task");

  fireEvent.change(input, { target: { value: "Learn React" } });
  fireEvent.click(button);

  fireEvent.click(screen.getByText("Delete"));

  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});