import {render, screen} from "@testing-library/react";
import {Header} from "./Header";

describe("Header Component", () => {
    it("Отображает текст", () => {
        render(<Header/>);
        expect(screen.getByText(/todos/)).toBeInTheDocument();
    })
})