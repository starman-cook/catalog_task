import React, { FunctionComponent, useState } from "react";
import styles from './AuthorItem.module.css'
import Button from "../UI/Button/Button";
import Modal from "../Modal/Modal";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import IAuthorItemProps from "./IAuthorItemProps";
import { deleteAuthor, deleteAuthorWithBooks, removeAuthor } from "../../store/authors/authorSlice";
import AuthorDetails from "../AuthorDetails/AuthorDetails";


const AuthorItem: FunctionComponent<IAuthorItemProps> = (props): React.ReactElement => {
    const dispatch: AppDispatch = useDispatch()
    const [isModal, setIsModal] = useState<boolean>(false)
    
    const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.stopPropagation()
        props.author.id && dispatch(deleteAuthor(props.author.id))
        props.author.id && dispatch(removeAuthor(props.author.id))
    }

    const deleteWithBooksHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.stopPropagation()
        props.author.id && dispatch(deleteAuthorWithBooks(props.author.id))
        props.author.id && dispatch(removeAuthor(props.author.id))
    }

    const openDetails = (): void => {
        setIsModal(true)
    }

    return (
        <div className={styles.AuthorItem}>
            {isModal ? <Modal
                close={() => setIsModal(false)}
            >
                <AuthorDetails 
                    id={props.author.id && props.author.id}
                />
            </Modal> : null}
            <div onClick={openDetails} className={styles.AuthorItem__detailsLink}>
                <h2 className={styles.AuthorItem__title}>{props.author.firstName} {props.author.lastName}</h2>
                <Button 
                        title="Delete"
                        click={deleteHandler}
                />
                <Button 
                        title="Delete with books"
                        click={deleteWithBooksHandler}
                />
            </div>
        </div>
    )
}

export default AuthorItem