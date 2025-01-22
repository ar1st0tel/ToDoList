import classes from "./Container.module.scss"
import {TaskComponent} from "../TaskComponent/TaskComponent";
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';


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