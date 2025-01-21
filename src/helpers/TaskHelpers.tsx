import {TaskInterface} from "../types.ts";

export const Finished = () => {
    return "✓"
}

export const Current = () => {
    return "…"
}

export const getTasksFromStorage = (): TaskInterface[] => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
}