import {render, screen, fireEvent} from "@testing-library/react";
import {InputElem} from "./InputElem";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

describe("InputElem Component", () => {
    const mockFunc = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("Отображает поле ввода и  кнопку", () => {
        render(<InputElem addTask={mockFunc}/>);
        expect(screen.getByPlaceholderText("Enter your description")).toBeInTheDocument();
        expect(screen.getByText("Add Task")).toBeInTheDocument();
    });
    it("добавляет задачу при нажатии на кнопку addTask", () => {
        render(<InputElem addTask={mockFunc}/>);
        const input = screen.getByPlaceholderText("Enter your description") as unknown as HTMLInputElement;
        fireEvent.change(input, {target: {value: "Added"}});
        expect(input.value).toBe("Added");
    });
    it("очищает поле ввода после добавления задачи", () => {
        render(<InputElem addTask={mockFunc}/>);
        const input = screen.getByPlaceholderText("Enter your description") as HTMLInputElement;
        const button = screen.getByText("Add Task");

        fireEvent.change(input, {target: {value: "Added"}});

        fireEvent.click(button);
        expect(input.value).toBe("");
    })
});