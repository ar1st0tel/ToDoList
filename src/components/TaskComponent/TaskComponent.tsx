import classes from "./TaskComponent.module.scss";
import {Task} from "../Task/Task.tsx";
import {InputElem} from "../InputElem/InputElem.tsx";
import {useTaskContext} from "../../helpers/useTaskContext.tsx";


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