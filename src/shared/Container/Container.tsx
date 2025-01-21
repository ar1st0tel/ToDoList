import classes from "./Container.module.scss"
import {TaskComponent} from "../../features/TaskList/TaskList.tsx";



const Container = () => {
    return (<div className={classes.container}>
        <div className={classes.title}>todos </div>
                <div className={classes.input}>
                    <TaskComponent />
                </div>
        </div>
    )
}
export default Container