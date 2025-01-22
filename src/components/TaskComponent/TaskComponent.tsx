import classes from "./TaskComponent.module.scss";
import {Task} from "../Task/Task.tsx";
import {InputElem} from "../InputElem/InputElem.tsx";
import {useTaskContext} from "../../helpers/useTaskContext.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from 'react'


export const TaskComponent = () => {
    const {filteredTasks, addTask, removeTask, toggleTask} = useTaskContext();


    return (
        <div className={classes.back}>
            <InputElem addTask={addTask}/>
            {filteredTasks.map(task => (
                <div className={classes.case} key={task.id}>
                    <Task
                        task={task}
                        toggleTask={() => toggleTask(task.id)}
                        removeTask={() => removeTask(task.id)}
                    />
                </div>
            ))}
        </div>
    )
}