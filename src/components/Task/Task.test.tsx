import { render, screen } from "@testing-library/react";
import { Task } from "./Task.tsx";
import {vi} from "vitest";

const mockToggleTask = vi.fn();
const mockRemoveTask = vi.fn();
const task = { id: 1, name: "Test", isCompleted: false };

describe('Task', () => {
    it("должен рендерить задачу с правильным названием", () => {
        render(<Task task={task} toggleTask={mockToggleTask} removeTask={mockRemoveTask} />);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});