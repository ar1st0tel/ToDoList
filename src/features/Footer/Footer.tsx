import {Button} from "../../shared/Button/Button.tsx";
import classes from "./Footer.module.scss"


export const Footer = () => {
    return (<div className={classes.footer}>
            <Button text="Remove all completed" />
        </div>

    )
}