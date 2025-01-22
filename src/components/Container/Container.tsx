import classes from "./Container.module.scss"
import {TaskComponent} from "../TaskComponent/TaskComponent.tsx";
import {Header} from "../Header/Header.tsx";
import {Footer} from "../Footer/Footer.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
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