import React, { FunctionComponent, useState } from "react";
import IBookItemProps from "./IBookItemProps";
import styles from './BookItem.module.css'
import Button from "../UI/Button/Button";
import Modal from "../Modal/Modal";
import { AppDispatch, AppState } from "../../store/store";
import { shallowEqual, useDispatch } from "react-redux";
import { addAuthor, deleteBook, removeBook } from "../../store/books/booksSlice";
import { useSelector } from "react-redux";
import BookDetails from "../BookDetails/BookDetails";


const BookItem: FunctionComponent<IBookItemProps> = (props): React.ReactElement => {
    const dispatch: AppDispatch = useDispatch()
    const [isModal, setIsModal] = useState<boolean>(false)
    const [addingAuthor, setAddingAuthor] = useState<boolean>(false)
    const {authors} = useSelector((state: AppState) => state.authors, shallowEqual)
    const [selectAuthor, setSelectAuthor] = useState<string>()
    
    const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.stopPropagation()
        props.book.id && dispatch(deleteBook(props.book.id))
        props.book.id && dispatch(removeBook(props.book.id))
    }
    const addAuthorHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.stopPropagation()
        setAddingAuthor(!addingAuthor)
    }
    const openDetails = (): void => {
        setIsModal(true)
    }
    const selectAuthorHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        e.stopPropagation()
        e.preventDefault()
        setSelectAuthor(e.target.value)
    }

    const addAuthorSend = (): void => {
        if (selectAuthor && props.book.id) {
            dispatch(addAuthor({authorId: parseInt(selectAuthor), bookId: props.book.id}))
            setAddingAuthor(false)
        }
  
    }
    return (
        <div className={styles.BookItem}>
            {isModal ? <Modal
                close={() => setIsModal(false)}
            >
                <BookDetails 
                    id={props.book.id && props.book.id}
                />
            </Modal> : null}
            <div onClick={openDetails} className={styles.BookItem__detailsLink}>
            <h2 className={styles.BookItem__title}>{props.book.title}</h2>
            <Button 
                    title="Delete"
                    click={deleteHandler}
            />
            <Button 
                    title={addingAuthor ? "Close Add Author" : "Add author"}
                    click={addAuthorHandler}
            />
        </div>

            {addingAuthor ? 
                <div>
                    <select defaultValue={'no'} onChange={selectAuthorHandler}>
                        <option value={'no'} disabled>SELECT AUTHOR</option>
                        {authors?.length ? 
                            authors.map(a => {
                                return <option value={a.id} key={a.id}>{a.firstName} {a.lastName}</option>
                            })
                        : <option>No authors found</option>}
                    </select>
                    <Button 
                        title="Add"
                        click={addAuthorSend}
                    />
                </div>
            : null}
        </div>
    )
}

export default BookItem