import classes from "./Header.module.scss";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from 'react';

export const Header = () => {
    return (
        <div className={classes.title}>todos </div>
    )
}