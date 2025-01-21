import { ReactNode, useState} from "react";
import {TaskInterface} from "../types.ts";
import {getTasksFromStorage} from "./TaskHelpers.tsx";
import { TaskContext} from "../types.ts";

export const TaskProvider = ({ children }: {children: ReactNode}) => {
    const [tasks, setTasks] = useState<TaskInterface[]>(getTasksFromStorage)
    const [filter, setFilter] = useState<string>("All");

    const addTask = (taskName: string) => {
        const newTask = {id: Date.now(), name: taskName, isCompleted: false};
        const finalTasks = [...tasks, newTask];
        setTasks(finalTasks)
        localStorage.setItem("tasks", JSON.stringify(finalTasks));
    }

    const removeTask = (taskId: number) => {
        const updatedTasks = tasks.filter((task: TaskInterface) => task.id !== taskId);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    const toggleTask = (taskId: number) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === taskId ? {...task, isCompleted: !task.isCompleted} : task))
    }
    const removeAllCompleted = () => {
        const unfinishedTasks = tasks.filter((task: TaskInterface) => !task.isCompleted);
        setTasks(unfinishedTasks);
        localStorage.setItem("tasks", JSON.stringify(unfinishedTasks));
    }
    const filteredTasks = tasks.filter((task: TaskInterface) => {
        if (filter === "Active") return !task.isCompleted;
        if (filter === "Completed") return task.isCompleted;
        return true
    })
    return (
        <TaskContext.Provider value={{tasks, addTask, toggleTask, removeTask, removeAllCompleted, setFilter, filteredTasks}}>
            {children}
        </TaskContext.Provider>
    )
}
