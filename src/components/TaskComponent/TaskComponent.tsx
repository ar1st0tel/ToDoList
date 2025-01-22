import classes from "./TaskComponent.module.scss";
import {Task} from "../Task/Task";
import {InputElem} from "../InputElem/InputElem";
import {useTaskContext} from "../../helpers/useTaskContext";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react'


export const TaskComponent = () => {
    const {filteredTasks, addTask, removeTask, toggleTask} = useTaskContext();


    return (<div className={classes.table}>
            <InputElem addTask={addTask}/>
            <div className={classes.back}>
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
        </div>
    )
}