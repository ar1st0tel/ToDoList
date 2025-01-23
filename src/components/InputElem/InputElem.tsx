import {ChangeEvent, useState} from "react";
import classes from "../TaskComponent/TaskComponent.module.scss";

export const InputElem = ({addTask}: { addTask: (taskName: string) => void }) => {
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
    <button onClick={handleAddTask} className={classes.button}>+</button>
    </div>
)
};
