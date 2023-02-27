import React, { FunctionComponent, useEffect, useRef } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import BooksList from "../../components/BooksList/BooksList";
import Button from "../../components/UI/Button/Button";
import { getAuthors } from "../../store/authors/authorSlice";
import { getBooks } from "../../store/books/booksSlice";
import { AppDispatch, AppState } from "../../store/store";


const BooksPage: FunctionComponent = (): React.ReactElement => {
    const dispatch: AppDispatch = useDispatch()
    const inputRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null)
    const {books} = useSelector((state: AppState) => state.books, shallowEqual)
    useEffect(() => {
        dispatch(getBooks())
        dispatch(getAuthors())
    }, [])

    const submit = (e: React.FormEvent): void => {
        e.preventDefault()
        dispatch(getBooks(`%${inputRef.current?.value}%`))
    }
    return (
        <>
            <form onSubmit={submit}>
                <input placeholder="Title" ref={inputRef} type="text"/>
                <Button
                    title={'FIND'}
                />
            </form>
            <BooksList 
                books={books}
            />
        </>
    )
}

export default BooksPage