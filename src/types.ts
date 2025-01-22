import React, {createContext} from "react";

export interface TaskInterface {
    id: number;
    name: string;
    isCompleted: boolean;
}
export interface TaskProps {
    task: TaskInterface;
    toggleTask: () => void;
    removeTask: (e: React.MouseEvent) => void;
}

export interface TaskContextInterface {
    tasks: TaskInterface[];
    toggleTask: (taskId: number) => void;
    removeTask: (taskId: number) => void;
    addTask: (taskName: string) => void;
    removeAllCompleted: () => void;
    setFilter: (filter: "Active" | "Completed" | "All") => void;
    filteredTasks: TaskInterface[];
}

export const TaskContext = createContext<TaskContextInterface | undefined>(undefined);
