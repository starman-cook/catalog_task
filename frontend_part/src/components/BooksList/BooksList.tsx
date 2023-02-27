import React, { FunctionComponent } from "react";
import IBooksListProps from "./IBooksListProps";
import styles from './BooksList.module.css'
import BookItem from "../BookItem/BookItem";


const BooksList: FunctionComponent<IBooksListProps> = (props): React.ReactElement => {
    return (
        <div className={styles.BooksList}>
           {props.books.length ? 
            props.books.map(b => {
                return <BookItem 
                    key={b.id}
                    book={b}
                />
           })
        : null}
        </div>
    )
}

export default BooksList