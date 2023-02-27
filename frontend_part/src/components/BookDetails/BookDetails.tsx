import React, { FunctionComponent, useEffect } from "react";
import IBookDetailsProps from "./IBookDetailsProps";
import { AppDispatch, AppState } from "../../store/store";
import { shallowEqual, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getBookById } from "../../store/books/booksSlice";


const BookDetails: FunctionComponent<IBookDetailsProps> = (props): React.ReactElement => {
    const dispatch: AppDispatch = useDispatch()
    const {book} = useSelector((state: AppState) => state.books, shallowEqual)
    useEffect(() => {
        props.id && dispatch(getBookById(props.id))
    }, [])
    return (
        <>
            {book ? <div>
                        <p>Id: {book.id}</p>
                        <h1>Title: {book.title}</h1>
                        <p>Authors:</p>
                        <ul>
                            {book.authors?.length ? book.authors.map(a => {
                                return <li key={a.id}>{a.firstName} {a.lastName}</li>
                            }) : <li>No authors</li>}
                        </ul>
                    </div> 
            : 
            <div>
                No details
            </div>}
        </>
    )
}

export default BookDetails