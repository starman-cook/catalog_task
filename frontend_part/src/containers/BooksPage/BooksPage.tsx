import React, { FunctionComponent, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import BooksList from "../../components/BooksList/BooksList";
import { getBooks } from "../../store/books/booksSlice";
import { AppDispatch, AppState } from "../../store/store";
import styles from './BooksPage.module.css'


const BooksPage: FunctionComponent = (): React.ReactElement => {
    const dispatch: AppDispatch = useDispatch()
    const {books} = useSelector((state: AppState) => state.books, shallowEqual)
    useEffect(() => {
        dispatch(getBooks())
    }, [])
    return (
        <>
        {/* HERE WILL BE FILTER BY TITLE */}
            <BooksList 
                books={books}
            />
        </>
    )
}

export default BooksPage