import classes from "./Container.module.scss"
import {TaskComponent} from "../features/TaskList/TaskList.tsx";
import {Header} from "../features/Header/Header.tsx";
import {Footer} from "../features/Footer/Footer.tsx";


const Container = () => {
    return (<div className={classes.container}>
            <Header/>
            <div className={classes.input}>
                <TaskComponent/>
            </div>
            <Footer />
        </div>
    )
}
export default Container