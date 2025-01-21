import classes from "./Container.module.scss"
import {Paragraph} from "../Paragraph/Paragraph.tsx";
import {InputElem} from "../InputElem/InputElem.tsx";


const Container = () => {
    return (<div className={classes.container}>
        <div className={classes.title}>todos </div>
                <div className={classes.input}>
                    <InputElem />
                </div>
                <Paragraph />
        </div>
    )
}
export default Container