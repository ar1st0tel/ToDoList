import {render, screen} from '@testing-library/react';
import Container from './Container';
import {TaskProvider} from "../../helpers/TaskProvider.tsx";

describe('Container', () => {
    it("Отображает Container", () => {
        render(
            <TaskProvider>
                <Container/>
            </TaskProvider>
        );

        expect(screen.getByText(/todos/)).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enter your description')).toBeInTheDocument();
        expect(screen.getByText('Remove completed')).toBeInTheDocument();
    });
})
