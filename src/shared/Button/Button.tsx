import classes from "./Button.module.scss"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';


interface ButtonProps {
    text: string;
    onClick: () => void;
}

export const Button = ({text, onClick}: ButtonProps) => {
    return <button onClick={onClick} className={classes.button}>
        {text}
    </button>
}