import {Button} from "../../shared/Button/Button.tsx";
import classes from "./Footer.module.scss"
import {useTaskContext} from "../../helpers/useTaskContext.tsx";


export const Footer = () => {
    const {removeAllCompleted, setFilter} = useTaskContext();
    return (<div className={classes.footer}>
            <Button text="Remove completed" onClick={removeAllCompleted}/>
            <Button text="All" onClick={() => setFilter("All")} />
            <Button text="Active" onClick={() => setFilter("Active")} />
            <Button text="Completed" onClick={() => setFilter("Completed")} />
        </div>
    )
}