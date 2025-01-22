import {useContext} from "react";
import {TaskContext} from "../types";


export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTasks must be used within useTasks');
    }
    return context;
}