import {render, screen, fireEvent} from "@testing-library/react";
import {InputElem} from "./InputElem";
import {vi} from "vitest";

describe("InputElem Component", () => {
    const mockFunc = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("Отображает поле ввода и  кнопку", () => {
        render(<InputElem addTask={mockFunc}/>);
        expect(screen.getByPlaceholderText("Enter your description")).toBeInTheDocument();
        expect(screen.getByText("+")).toBeInTheDocument();
    });
    it("добавляет задачу при нажатии на кнопку +", () => {
        render(<InputElem addTask={mockFunc}/>);
        const input = screen.getByPlaceholderText("Enter your description") as unknown as HTMLInputElement;
        fireEvent.change(input, {target: {value: "Added"}});
        expect(input.value).toBe("Added");
    });
    it("очищает поле ввода после добавления задачи", () => {
        render(<InputElem addTask={mockFunc}/>);
        const input = screen.getByPlaceholderText("Enter your description") as HTMLInputElement;
        const button = screen.getByText("+");

        fireEvent.change(input, {target: {value: "Added"}});

        fireEvent.click(button);
        expect(input.value).toBe("");
    })
});