import React, { FunctionComponent } from "react";
import IBookItemProps from "./IBookItemProps";
import styles from './BookItem.module.css'


const BookItem: FunctionComponent<IBookItemProps> = (props): React.ReactElement => {
    return (
        <div className={styles.BookItem}>
           <h2 className={styles.BookItem__title}>{props.book.title}</h2>
        </div>
    )
}

export default BookItem