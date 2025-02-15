import {fireEvent, render, screen} from "@testing-library/react";
import { Footer } from "./Footer";
import {TaskContext, TaskContextInterface} from "../../types";
import {vi} from "vitest";

const mockData = {
    removeAllCompleted: vi.fn(),
    setFilter: vi.fn(),
} as unknown as TaskContextInterface;

describe("Footer Component", () => {
    it("Отображает все кнопки", () => {
        render(
            <TaskContext.Provider value={mockData}>
                <Footer />
            </TaskContext.Provider>
        );

        expect(screen.getByText("Remove completed")).toBeInTheDocument();
        expect(screen.getByText("Active")).toBeInTheDocument();
        expect(screen.getByText("Completed")).toBeInTheDocument();
        expect(screen.getByText("All")).toBeInTheDocument();
    });
    it("removeAllCompleted срабатывает при нажатии кнопки Remove completed", () => {
        render(
            <TaskContext.Provider value={mockData}>
                <Footer />
            </TaskContext.Provider>
        );

        fireEvent.click(screen.getByText("Remove completed"));
        expect(mockData.removeAllCompleted).toHaveBeenCalled();
    });
});