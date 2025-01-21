import classes from "./InputElem.module.scss";
import React, {ChangeEvent} from "react";

interface Task  {
    id: number;
    name: string;
    isCompleted: boolean;
}

export const InputElem = () => {
    const [tasks, setTasks] = React.useState<Task[]>([])
    const [value, setValue] = React.useState("");
    const handleChanges = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
    const handlePutTask = () => {
        setTasks( [
            ...tasks,
            {id: tasks.length + 1, name: value, isCompleted: false},
        ]);
        setValue("")
    }
    return (
        <div className={classes.input}>
            <input
                   type="text"
                   value={value}
                   onChange={handleChanges}
                    placeholder="Enter your description" />
                <button onClick={handlePutTask}>Add Task</button>
        </div>
    )
}