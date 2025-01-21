import React, {MouseEvent} from "react";
import {Current, Finished} from "./helpers.tsx";
import classes from "./Paragraph.module.scss"

type TaskProps = {
    name: string,
    isFinished: boolean;
    toggleTask: (event: MouseEvent<HTMLElement>) => void;
}
const Task = ({name, isFinished, toggleTask}: TaskProps) => {
    return (<div onClick={toggleTask} className={classes.paragraph}>
            {isFinished ? <Finished/> : <Current/>} {""}
            <span className={isFinished ? classes.line : undefined}>{name}</span>
        </div>
    )
}

export const Paragraph = () => {
    const [isFinished, setIsFinished] = React.useState<boolean>(false);
    const handleIsFinished = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        setIsFinished(!isFinished);
    }
    const text = "smth"
    return (
        <div>
            <Task name={text} isFinished={isFinished} toggleTask={handleIsFinished}/>
        </div>
    )
}