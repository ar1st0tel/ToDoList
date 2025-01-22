import Background from "../../components/Container/Container";
import classes from "./MainPage.module.scss";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react'

const MainPage = () => {
    return (
        <div className={classes.background}>
          <Background />
        </div>
    )
};
export default MainPage;
