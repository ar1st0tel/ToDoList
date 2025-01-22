import classes from "./Task.module.scss";
import {Current, Finished} from "../../helpers/TaskHelpers";
import {TaskProps} from "../../types";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react'



export const Task= ({task, toggleTask, removeTask} : TaskProps) => {
    return (
        <div onClick={toggleTask} className={classes.paragraph}>
            <span className={classes.left}> {task.isCompleted ? <Finished/> : <Current/>} {""}
                <span className={task.isCompleted ? classes.line : classes.align}>{task.name}</span>
            </span>
            <button className={classes.delete} onClick={removeTask}>–</button>
        </div>
    )
}