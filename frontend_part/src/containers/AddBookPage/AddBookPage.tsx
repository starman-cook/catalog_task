import React, { FunctionComponent, useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuthors } from "../../store/authors/authorSlice";
import { createBook } from "../../store/books/booksSlice";
import { AppDispatch, AppState } from "../../store/store";


const AddBooksPage: FunctionComponent = (): React.ReactElement => {
    const dispatch: AppDispatch = useDispatch()
    const {authors} = useSelector((state: AppState) => state.authors, shallowEqual)
    const [selectedAuthors, setSelectedAuthors] = useState<number[]>([])
    const [inputValue, setInputValue] = useState<string>('')
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getAuthors())
    }, [])

    const submit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        console.log(e.target)
        try {
            dispatch(createBook({title: inputValue, authorIds: selectedAuthors}))
            navigate({
                pathname: '/'
            })
        } catch (err) {
            console.log(err)
        }
        
    }

    const selectAuthorHandler = (e: React.ChangeEvent, id: number): void => {
        const idx = selectedAuthors.indexOf(id)
        const copyState = [...selectedAuthors]
        if (idx >= 0) {
            copyState.splice(idx, 1)
        } else {
            copyState.push(id)
        }
        setSelectedAuthors(copyState)
    }

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value)
    }

    return (
        <form onSubmit={submit}>
            <input placeholder="Title" onChange={inputHandler} type="text"/>
            <div>
                
                    {authors?.length ? 
                        authors.map(a => {
                            return (
                                <div>
                                    <label key={a.id}>
                                        <input onChange={(e) => selectAuthorHandler(e, a.id)}  type="checkbox" />
                                        <span>{a.firstName} {a.lastName}</span>
                                    </label>
                                </div>
                            )
                        })
                    : <p>No authors found</p>}
            </div>
            <button>Create</button>
        </form>
    )
}

export default AddBooksPage