import React, { FunctionComponent } from "react";
import IButtonProps from "./IButtonProps";
import styles from './Button.module.css'


const Button: FunctionComponent<IButtonProps> = (props): React.ReactElement => {
    return (
        <button onClick={props.click} className={styles.Button}>{props.title}</button>
    )
}

export default Button