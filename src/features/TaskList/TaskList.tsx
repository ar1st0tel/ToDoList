import classes from "./TaskList.module.scss";
import {ChangeEvent, useState} from "react";
import {Current, Finished} from "./helpers";

interface Task {
    id: number;
    name: string;
    isCompleted: boolean;
}


const InputElem = ({addTask}: { addTask: (taskName: string) => void }) => {
    const [value, setValue] = useState("");

    const handleChanges = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const handleAddTask = () => {
        if (value.trim()) {
            addTask(value);
            setValue("")
        }
    }

    return (
        <div className={classes.input}>
            <input
                type="text"
                value={value}
                onChange={handleChanges}
                placeholder="Enter your description"
                className={classes.inputArea}
            />
            <button onClick={handleAddTask} className={classes.button}>Add Task</button>
        </div>
    )
};


const Task = ({task, toggleTask, removeTask}: { task: Task, toggleTask: () => void, removeTask: () => void }) => {
    return (
        <div onClick={toggleTask} className={classes.paragraph}>
            <span> {task.isCompleted ? <Finished/> : <Current/>} {""}
                <span className={task.isCompleted ? classes.line : undefined}>{task.name}</span>
            </span>
            <button className={classes.delete} onClick={removeTask}>Remove task</button>
        </div>
    )
}

export const TaskComponent = () => {
    const getTasksFromStorage = (): Task[] => {
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    }
    const [tasks, setTasks] = useState<Task[]>(getTasksFromStorage)

    const addTask = (taskName: string) => {
        const newTask = {id: tasks.length + 1, name: taskName, isCompleted: false};
        const finalTasks = [...tasks, newTask];
        setTasks(finalTasks)
        localStorage.setItem("tasks", JSON.stringify(finalTasks));
    }

    const removeTask = (taskId: number) => {
        const updatedTasks = tasks.filter((task: Task) => task.id !== taskId);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    const toggleTask = (taskId: number) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === taskId ? {...task, isCompleted: !task.isCompleted} : task))
    }
    return (
        <div>
            <InputElem addTask={addTask}/>
            {tasks.map(task => (
                <div className={classes.case}>
                    <Task
                        key={task.id}
                        task={task}
                        toggleTask={() => toggleTask(task.id)}
                        removeTask={() => removeTask(task.id)}
                    />
                </div>
            ))}
        </div>
    )
}