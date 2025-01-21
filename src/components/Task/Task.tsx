import classes from "./Task.module.scss";
import {Current, Finished} from "../../helpers/TaskHelpers.tsx";
import  { TaskInterface } from "../../types.ts";

export const Task = ({task, toggleTask, removeTask}: { task: TaskInterface, toggleTask: () => void, removeTask: () => void }) => {
    return (
        <div onClick={toggleTask} className={classes.paragraph}>
            <span> {task.isCompleted ? <Finished/> : <Current/>} {""}
                <span className={task.isCompleted ? classes.line : undefined}>{task.name}</span>
            </span>
            <button className={classes.delete} onClick={removeTask}>Remove task</button>
        </div>
    )
}