import {TaskInterface} from "../types.ts";

export const Finished = () => {
    return <span>✅</span>
}

export const Current = () => {
    return <span>⬜</span>
}

// eslint-disable-next-line react-refresh/only-export-components
export const getTasksFromStorage = (): TaskInterface[] => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
}