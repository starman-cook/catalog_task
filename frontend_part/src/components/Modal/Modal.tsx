import React, { FunctionComponent } from "react";
import IModalProps from "./IModalProps";
import styles from './Modal.module.css'


const Modal: FunctionComponent<IModalProps> = (props): React.ReactElement => {
    return (
        <>
            <div onClick={props.close} className={styles.Modal__bg} />
            <div className={styles.Modal} >
                {props.children}
            </div>
        </>
    )
}

export default Modal