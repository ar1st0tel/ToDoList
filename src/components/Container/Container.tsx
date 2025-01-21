import classes from "./Container.module.scss"
import {TaskComponent} from "../TaskComponent/TaskComponent.tsx";
import {Header} from "../Header/Header.tsx";
import {Footer} from "../Footer/Footer.tsx";


const Container = () => {
    return (<div className={classes.container}>
            <div className={classes.background}>
                <Header/>
                <TaskComponent/>
            </div>
            <Footer />
        </div>
    )
}
export default Container