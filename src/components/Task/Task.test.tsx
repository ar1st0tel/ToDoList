import { render, screen } from "@testing-library/react";
import { Task } from "./Task.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from "react";

const mockToggleTask = jest.fn();
const mockRemoveTask = jest.fn();
const task = { id: 1, name: "Test", isCompleted: false };

describe('Task', () => {
    it("должен рендерить задачу с правильным названием", () => {
        render(<Task task={task} toggleTask={mockToggleTask} removeTask={mockRemoveTask} />);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});