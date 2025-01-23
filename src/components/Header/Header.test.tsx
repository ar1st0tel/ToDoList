import {render, screen} from "@testing-library/react";
import {Header} from "./Header";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

describe("Header Component", () => {
    it("Отображает текст", () => {
        render(<Header/>);
        expect(screen.getByText(/todos/)).toBeInTheDocument();
    })
})