import classes from "./Task.module.scss";
import {Current, Finished} from "../../helpers/TaskHelpers.tsx";
import {TaskProps} from "../../types.ts";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react'



export const Task= ({task, toggleTask, removeTask} : TaskProps) => {
    return (
        <div onClick={toggleTask} className={classes.paragraph}>
            <span> {task.isCompleted ? <Finished/> : <Current/>} {""}
                <span className={task.isCompleted ? classes.line : undefined}>{task.name}</span>
            </span>
            <button className={classes.delete} onClick={removeTask}>Remove task</button>
        </div>
    )
}